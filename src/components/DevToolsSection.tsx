"use client";
import { useState } from "react";
import { Code2 } from "lucide-react";
import { tools, type ToolCategory } from "../app/data";
import ToolModal from "./ToolModal";
import type { Tool } from "../app/data";

const cats: ToolCategory[] = [
  "all",
  "frontend",
  "backend",
  "database",
  "tools",
  "design",
];
const catLabels: Record<ToolCategory, string> = {
  all: "All Technologies",
  frontend: "Frontend",
  backend: "Backend",
  database: "Database",
  tools: "Tools",
  design: "Design",
};

export default function DevToolsSection() {
  const [activeCat, setActiveCat] = useState<ToolCategory>("all");
  const [selectedTool, setSelectedTool] = useState<Tool | null>(null);

  const filtered =
    activeCat === "all" ? tools : tools.filter((t) => t.cat === activeCat);

  return (
    <div>
      <h2 className="text-xl md:text-2xl font-semibold text-[#f0f6fc] mb-1">
        Dev Tools &amp; Technologies
      </h2>
      <p className="text-[13px] text-[#8b949e] mb-5">
        Click on any technology to see how I&apos;ve used it in real projects
      </p>

      {/* Filter tabs */}
      <div className="flex flex-wrap gap-1.5 mb-6 bg-transparent border border-gray-700 rounded-md p-1 w-fit max-w-full overflow-x-auto">
        {cats.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCat(cat)}
            className={`px-3 py-1.5 rounded text-[12px] font-medium transition-all cursor-pointer whitespace-nowrap ${
              activeCat === cat
                ? "bg-[#161b22] text-[#f0f6fc] border border-[#30363d]"
                : "text-[#8b949e] hover:text-[#f0f6fc]"
            }`}
          >
            {catLabels[cat]}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((tool) => (
          <div
            key={tool.name}
            onClick={() => setSelectedTool(tool)}
            className="group relative bg-transparent border border-gray-800 rounded-md p-4 cursor-pointer hover:border-[#8b949e] transition-all hover:-translate-y-px overflow-hidden"
          >
            {/* Top accent */}
            <div className="absolute inset-x-0 top-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity" />
            {/* Icon */}
            <div
              className="w-8 h-8 rounded-md flex items-center justify-center text-lg mb-3"
              style={{ background: tool.accent + "22" }}
            >
              {tool.emoji}
            </div>
            <p className="text-[13px] font-semibold text-[#f0f6fc] font-mono mb-1">
              {tool.name}
            </p>
            <p className="text-[12px] text-[#8b949e] leading-relaxed mb-3">
              {tool.desc}
            </p>
            <div className="flex items-center gap-1.5 text-[11px] text-[#388bfd]">
              <Code2 size={11} />
              Click to view code →
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedTool && (
        <ToolModal tool={selectedTool} onClose={() => setSelectedTool(null)} />
      )}
    </div>
  );
}
