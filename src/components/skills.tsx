"use client";

import { useEffect, useRef, useState } from "react";
import {
  Chart,
  RadarController,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
} from "chart.js";

Chart.register(
  RadarController,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
);

const ALL_SKILLS = [
  {
    name: "JavaScript",
    score: 95,
    cat: "Frontend",
    years: 4,
    projects: ["SongaTrack", "ContextAI", "Portfolio"],
  },
  {
    name: "React",
    score: 92,
    cat: "Frontend",
    years: 3,
    projects: ["SongaTrack", "ContextAI", "Portfolio"],
  },
  {
    name: "TypeScript",
    score: 90,
    cat: "Frontend",
    years: 3,
    projects: ["SongaTrack", "ContextAI"],
  },
  {
    name: "TailwindCSS",
    score: 85,
    cat: "Frontend",
    years: 2,
    projects: ["SongaTrack", "Portfolio"],
  },
  {
    name: "Next.js",
    score: 82,
    cat: "Frontend",
    years: 2,
    projects: ["ContextAI", "Portfolio"],
  },
  {
    name: "Framer Motion",
    score: 65,
    cat: "Frontend",
    years: 1,
    projects: ["Portfolio"],
  },
  {
    name: "Node.js",
    score: 88,
    cat: "Backend",
    years: 3,
    projects: ["SongaTrack", "ContextAI"],
  },
  {
    name: "Firebase",
    score: 78,
    cat: "Backend",
    years: 2,
    projects: ["SongaTrack"],
  },
  {
    name: "Python",
    score: 68,
    cat: "Backend",
    years: 2,
    projects: ["ContextAI"],
  },
  {
    name: "Git",
    score: 93,
    cat: "Tooling",
    years: 4,
    projects: ["All projects"],
  },
  {
    name: "Vercel",
    score: 90,
    cat: "Tooling",
    years: 3,
    projects: ["ContextAI", "Portfolio"],
  },
  {
    name: "Resend",
    score: 58,
    cat: "Tooling",
    years: 1,
    projects: ["SongaTrack"],
  },
  {
    name: "Figma",
    score: 75,
    cat: "Design",
    years: 2,
    projects: ["SongaTrack", "Portfolio"],
  },
  {
    name: "Sanity",
    score: 60,
    cat: "Design",
    years: 1,
    projects: ["ContextAI"],
  },
];

type Category = "All" | "Frontend" | "Backend" | "Tooling" | "Design";

const CATEGORY_STYLES: Record<
  Category,
  { fill: string; stroke: string; dot: string; badge: string; text: string }
> = {
  All: {
    fill: "rgba(29,158,117,0.15)",
    stroke: "#1D9E75",
    dot: "#1D9E75",
    badge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    text: "text-emerald-400",
  },
  Frontend: {
    fill: "rgba(29,158,117,0.15)",
    stroke: "#1D9E75",
    dot: "#1D9E75",
    badge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    text: "text-emerald-400",
  },
  Backend: {
    fill: "rgba(55,138,221,0.15)",
    stroke: "#378ADD",
    dot: "#378ADD",
    badge: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    text: "text-blue-400",
  },
  Tooling: {
    fill: "rgba(127,119,221,0.15)",
    stroke: "#7F77DD",
    dot: "#7F77DD",
    badge: "bg-violet-500/10 text-violet-400 border-violet-500/20",
    text: "text-violet-400",
  },
  Design: {
    fill: "rgba(212,83,126,0.15)",
    stroke: "#D4537E",
    dot: "#D4537E",
    badge: "bg-pink-500/10 text-pink-400 border-pink-500/20",
    text: "text-pink-400",
  },
};

const FILTERS: Category[] = ["All", "Frontend", "Backend", "Tooling", "Design"];

type Skill = (typeof ALL_SKILLS)[number];

export default function SkillsRadar() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chartRef = useRef<Chart | null>(null);
  const [activeCat, setActiveCat] = useState<Category>("All");
  const [hoveredSkill, setHoveredSkill] = useState<Skill | null>(null);

  const filtered =
    activeCat === "All"
      ? ALL_SKILLS
      : ALL_SKILLS.filter((s) => s.cat === activeCat);

  const avgScore = Math.round(
    filtered.reduce((a, s) => a + s.score, 0) / filtered.length,
  );

  const catStyle = CATEGORY_STYLES[activeCat];

  useEffect(() => {
    if (!canvasRef.current) return;

    if (chartRef.current) {
      chartRef.current.destroy();
      chartRef.current = null;
    }

    const isDark =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    const gridColor = isDark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.08)";
    const labelColor = isDark ? "rgba(255,255,255,0.45)" : "rgba(0,0,0,0.45)";

    chartRef.current = new Chart(canvasRef.current, {
      type: "radar",
      data: {
        labels: filtered.map((s) => s.name),
        datasets: [
          {
            label: "Proficiency",
            data: filtered.map((s) => s.score),
            backgroundColor: catStyle.fill,
            borderColor: catStyle.stroke,
            borderWidth: 1.5,
            pointBackgroundColor: catStyle.stroke,
            pointRadius: 5,
            pointHoverRadius: 7,
            pointBorderWidth: 0,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        animation: { duration: 400 },
        plugins: {
          legend: { display: false },
          tooltip: {
            enabled: false,
            external: (ctx) => {
              const tp = ctx.tooltip;
              if (!tp || tp.dataPoints.length === 0) {
                setHoveredSkill(null);
                return;
              }
              const idx = tp.dataPoints[0].dataIndex;
              setHoveredSkill(filtered[idx] ?? null);
            },
          },
        },
        scales: {
          r: {
            min: 0,
            max: 100,
            ticks: { stepSize: 25, display: false },
            grid: { color: gridColor },
            angleLines: { color: gridColor },
            pointLabels: {
              font: { size: 11, family: "inherit" },
              color: labelColor,
            },
          },
        },
      },
    });

    return () => {
      chartRef.current?.destroy();
      chartRef.current = null;
    };
  }, [activeCat]);

  return (
    <section className="w-full py-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <p className="text-xs font-medium tracking-widest text-zinc-500 uppercase mb-2">
            Proficiency
          </p>
          <h2 className="text-2xl font-semibold text-white">
            Skills at a glance
          </h2>
          <p className="text-sm text-zinc-400 mt-1">
            Click a category to filter. Hover the chart to inspect each skill.
          </p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          {[
            { num: ALL_SKILLS.length, label: "Skills" },
            { num: 5, label: "Projects" },
            { num: "2 yrs", label: "Experience" },
          ].map(({ num, label }) => (
            <div
              key={label}
              className="bg-[#161b22] border border-[#30363d] rounded-xl p-4 text-center"
            >
              <p className="text-xl font-semibold text-white">{num}</p>
              <p className="text-xs text-zinc-500 mt-0.5">{label}</p>
            </div>
          ))}
        </div>

        {/* Filter pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {FILTERS.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCat(cat);
                setHoveredSkill(null);
              }}
              className={`text-xs px-4 py-1.5 rounded-full border transition-all duration-150 ${
                activeCat === cat
                  ? `${CATEGORY_STYLES[cat].badge} border font-medium`
                  : "bg-[#161b22] border border-[#30363d] hover:bg-[#21262d] hover:text-zinc-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Main grid: chart + list */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Radar chart */}
          <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-6">
            <canvas
              ref={canvasRef}
              role="img"
              aria-label={`Radar chart of Sharon Mwangi's ${activeCat === "All" ? "all" : activeCat} skills`}
            />
          </div>

          {/* Skill list */}
          <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-6">
            <p className="text-xs font-medium text-zinc-500 uppercase tracking-widest mb-4">
              {activeCat === "All" ? "All skills" : activeCat}
            </p>
            <ul className="divide-y divide-zinc-800">
              {filtered.map((skill) => {
                const style = CATEGORY_STYLES[skill.cat as Category];
                const pct = skill.score;
                return (
                  <li key={skill.name} className="py-3 first:pt-0 last:pb-0">
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <span
                          className="w-2 h-2 rounded-full flex-shrink-0"
                          style={{ background: style.dot }}
                        />
                        <span className="text-sm text-white">{skill.name}</span>
                        <span
                          className={`text-[10px] px-1.5 py-0.5 rounded border ${style.badge}`}
                        >
                          {skill.cat}
                        </span>
                      </div>
                      <span className="text-sm font-medium text-white tabular-nums">
                        {skill.score}
                        <span className="text-xs font-normal text-zinc-500">
                          /100
                        </span>
                      </span>
                    </div>
                    {/* Mini progress bar */}
                    <div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{
                          width: `${pct}%`,
                          background: style.dot,
                        }}
                      />
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Hover detail strip */}
        <div
          className={`mt-4 rounded-xl border px-5 py-3.5 flex items-center gap-3 text-sm transition-all duration-200 ${
            hoveredSkill
              ? "bg-[#161b22] border border-[#30363d] opacity-100"
              : "border-[#30363d] bg-[#161b22] opacity-60"
          }`}
        >
          {hoveredSkill ? (
            <>
              <span
                className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                style={{
                  background: CATEGORY_STYLES[hoveredSkill.cat as Category].dot,
                }}
              />
              <span className="font-medium text-white">
                {hoveredSkill.name}
              </span>
              <span className="text-zinc-400">
                {hoveredSkill.score}/100 &middot; {hoveredSkill.years} yr
                {hoveredSkill.years > 1 ? "s" : ""} &middot; {hoveredSkill.cat}
              </span>
              <span className="ml-auto text-zinc-500 text-xs">
                {hoveredSkill.projects.join(", ")}
              </span>
            </>
          ) : (
            <span className="text-zinc-500">
              Hover a point on the chart to inspect a skill
            </span>
          )}
        </div>
      </div>
    </section>
  );
}
