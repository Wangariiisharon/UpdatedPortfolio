import { NextResponse } from "next/server";

const LEVEL_MAP: Record<string, number> = {
  NONE: 0,
  FIRST_QUARTILE: 1,
  SECOND_QUARTILE: 2,
  THIRD_QUARTILE: 3,
  FOURTH_QUARTILE: 4,
};

function buildQuery(username: string, joinYear: number) {
  const currentYear = new Date().getFullYear();
  const years = Array.from(
    { length: currentYear - joinYear + 1 },
    (_, i) => joinYear + i
  );

  const yearFragments = years
    .map(
      (year) => `
      y${year}: contributionsCollection(
        from: "${year}-01-01T00:00:00Z"
        to:   "${year}-12-31T23:59:59Z"
      ) {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              date
              contributionCount
              contributionLevel
            }
          }
        }
      }`
    )
    .join("\n");

  return `query { user(login: "${username}") { ${yearFragments} } }`;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const joinYear = parseInt(searchParams.get("joinYear") ?? "2022", 10);

  const username = process.env.GITHUB_USERNAME;
  const token = process.env.GITHUB_TOKEN;

  if (!username || !token) {
    return NextResponse.json(
      { error: "GITHUB_USERNAME or GITHUB_TOKEN not set in .env.local" },
      { status: 500 }
    );
  }

  try {
    const res = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: buildQuery(username, joinYear) }),
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: `GitHub API error: ${res.status}` },
        { status: res.status }
      );
    }

    const json = await res.json();

    if (json.errors) {
      return NextResponse.json(
        { error: json.errors[0].message },
        { status: 400 }
      );
    }

    const userData = json.data.user;
    const currentYear = new Date().getFullYear();

    // Today's date string e.g. "2026-05-16" — used to filter out future days
    const today = new Date().toISOString().split("T")[0];

    let allTimeTotal = 0;
    // Each week is an array of exactly 7 slots (null = empty padding cell)
    let currentYearWeeks: (null | {
      date: string;
      count: number;
      level: number;
    })[][] = [];

    Object.entries(userData).forEach(([key, value]: [string, any]) => {
      const year = parseInt(key.replace("y", ""), 10);
      const calendar = value.contributionCalendar;

      allTimeTotal += calendar.totalContributions;

      if (year === currentYear) {
        currentYearWeeks = calendar.weeks
          // Drop any week that's entirely in the future
          .filter((week: any) =>
            week.contributionDays.some((d: any) => d.date <= today)
          )
          .map((week: any, weekIdx: number) => {
            // Only keep days up to today
            const days = week.contributionDays
              .filter((d: any) => d.date <= today)
              .map((d: any) => ({
                date: d.date,
                count: d.contributionCount,
                level: LEVEL_MAP[d.contributionLevel] ?? 0,
              }));

            // The first week of the year may not start on Sunday.
            // Pad the start so each week-column has exactly 7 slots.
            if (weekIdx === 0 && days.length > 0) {
              const [y, m, d] = days[0].date.split("-").map(Number);
              // Use UTC to avoid timezone shifting the day-of-week
              const dow = new Date(Date.UTC(y, m - 1, d)).getUTCDay(); // 0=Sun
              const padded: (null | {
                date: string;
                count: number;
                level: number;
              })[] = [...Array(dow).fill(null), ...days];
              return padded;
            }

            return days as (null | {
              date: string;
              count: number;
              level: number;
            })[];
          });
      }
    });

    return NextResponse.json({ allTimeTotal, currentYearWeeks, username });
  } catch (err) {
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
