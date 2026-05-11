"use client";
import { useMemo } from "react";

export default function ContribGraph() {
  const cells = useMemo(() => {
    const levels = [0, 0, 0, 0, 1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4];
    return Array.from({ length: 53 * 7 }, () =>
      Math.random() < 0.38
        ? 0
        : levels[Math.floor(Math.random() * levels.length)]
    );
  }, []);

  const levelColor = [
    "bg-[#21262d]",
    "bg-[#0e4429]",
    "bg-[#006d32]",
    "bg-[#26a641]",
    "bg-[#39d353]",
  ];

  return (
    <div className="bg-[#161b22] border border-[#30363d] rounded-md p-4 mb-6">
      <div className="flex items-center justify-between mb-3 text-[13px] text-[#8b949e]">
        <span>
          <span className="text-[#f0f6fc] font-semibold">
            847 contributions
          </span>{" "}
          in the last year
        </span>
        <span className="font-mono text-xs">2025 – 2026</span>
      </div>
      <div
        className="grid gap-[3px] overflow-x-auto"
        style={{
          gridTemplateColumns: "repeat(53, minmax(10px, 1fr))",
          gridTemplateRows: "repeat(7, 10px)",
        }}
      >
        {cells.map((level, i) => (
          <div
            key={i}
            className={`w-[10px] h-[10px] rounded-[2px] ${levelColor[level]}`}
            title={`${level * 3} contributions`}
          />
        ))}
      </div>
      <div className="flex items-center gap-1.5 mt-2.5 text-[11px] text-[#8b949e]">
        Less
        {levelColor.map((c, i) => (
          <div key={i} className={`w-[10px] h-[10px] rounded-[2px] ${c}`} />
        ))}
        More
      </div>
    </div>
  );
}
