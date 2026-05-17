"use client";

import { useEffect, useState } from "react";

interface ContribDay {
  date: string;
  count: number;
  level: number;
}

// Each week = 7 slots, null means empty padding cell
type Week = (ContribDay | null)[];

interface ApiResponse {
  allTimeTotal: number;
  currentYearWeeks: Week[];
  username: string;
}

interface Props {
  joinYear?: number;
}

const LEVEL_COLOR: Record<number, string> = {
  0: "#21262d",
  1: "#0e4429",
  2: "#006d32",
  3: "#26a641",
  4: "#39d353",
};

export default function ContribGraph({ joinYear = 2022 }: Props) {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const currentYear = new Date().getFullYear();

  useEffect(() => {
    fetch(`/api/githubContributions?joinYear=${joinYear}`)
      .then((r) => r.json())
      .then((json: ApiResponse & { error?: string }) => {
        if (json.error) throw new Error(json.error);
        setData(json);
        setLoading(false);
      })
      .catch((err: Error) => {
        setError(err.message);
        setLoading(false);
      });
  }, [joinYear]);

  return (
    <div className="bg-[#161b22] border border-[#30363d] rounded-md p-4 mb-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-3 text-[13px] text-[#8b949e]">
        <span>
          {loading ? (
            <span className="animate-pulse">Loading contributions…</span>
          ) : error ? (
            <span className="text-red-400">Error: {error}</span>
          ) : (
            <>
              <span className="text-[#f0f6fc] font-semibold">
                {data!.allTimeTotal.toLocaleString()} contributions
              </span>{" "}
              since {joinYear}
            </>
          )}
        </span>
        {!loading && !error && (
          <span className="font-mono text-xs">
            {joinYear} – {currentYear}
          </span>
        )}
      </div>

      {/* Graph */}
      <div className="overflow-x-auto">
        {loading ? (
          /*
           * Skeleton — 53 fake columns × 7 rows
           * Simple flex approach, no CSS grid needed
           */
          <div className="flex gap-[3px] animate-pulse">
            {Array.from({ length: 53 }).map((_, wi) => (
              <div key={wi} className="flex flex-col gap-[3px]">
                {Array.from({ length: 7 }).map((_, di) => (
                  <div
                    key={di}
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: 2,
                      backgroundColor: "#21262d",
                    }}
                  />
                ))}
              </div>
            ))}
          </div>
        ) : error ? null : (
          /*
           * Real graph — one flex column per week, 7 cells per column.
           * The API already:
           *   • filtered out future dates
           *   • padded the first week so days land on the right row (Sun=0)
           * null cells render as transparent spacers.
           */
          <div className="flex gap-[3px]">
            {data!.currentYearWeeks.map((week, wi) => (
              <div key={wi} className="flex flex-col gap-[3px]">
                {/* Always render 7 rows per column for alignment */}
                {Array.from({ length: 7 }).map((_, di) => {
                  const day = week[di] ?? null;
                  return (
                    <div
                      key={di}
                      style={{
                        width: 10,
                        height: 10,
                        borderRadius: 2,
                        backgroundColor: day
                          ? LEVEL_COLOR[day.level]
                          : "transparent",
                        flexShrink: 0,
                      }}
                      title={
                        !day
                          ? undefined
                          : day.count === 0
                            ? `No contributions on ${day.date}`
                            : `${day.count} contribution${day.count !== 1 ? "s" : ""} on ${day.date}`
                      }
                    />
                  );
                })}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Legend */}
      {!error && (
        <div className="flex items-center gap-1.5 mt-2.5 text-[11px] text-[#8b949e]">
          Less
          {Object.values(LEVEL_COLOR).map((color, i) => (
            <div
              key={i}
              style={{
                width: 10,
                height: 10,
                borderRadius: 2,
                backgroundColor: color,
                flexShrink: 0,
              }}
            />
          ))}
          More
        </div>
      )}
    </div>
  );
}
