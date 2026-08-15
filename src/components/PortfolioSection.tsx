"use client";
import { useState } from "react";
import { Search, ExternalLink, ChevronDown } from "lucide-react";
import { projects } from "../app/data";

function CustomSelect({
  value,
  options,
}: {
  value: string;
  options: string[];
}) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(value);

  return (
    <div className="relative w-full sm:w-auto">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full sm:min-w-[160px] flex items-center justify-between gap-3 px-3 py-1.5 bg-[#21262d] border border-[#30363d] rounded-md text-[#f0f6fc] text-[12px] focus:outline-none cursor-pointer"
      >
        <span>{selected}</span>
        <ChevronDown
          size={13}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute z-50 left-0 right-0 mt-1 overflow-hidden bg-[#21262d] border border-[#30363d] rounded-md shadow-lg">
          {options.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => {
                setSelected(option);
                setOpen(false);
              }}
              className="w-full text-left px-3 py-2 text-[12px] text-[#f0f6fc] hover:bg-[#30363d] cursor-pointer"
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function PortfolioSection() {
  const [query, setQuery] = useState("");

  const filtered = projects.filter(
    (p) =>
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.desc.toLowerCase().includes(query.toLowerCase()) ||
      p.stack.some((s) => s.toLowerCase().includes(query.toLowerCase())),
  );

  return (
    <div>
      <h2 className="text-xl md:text-2xl font-semibold text-[#f0f6fc] mb-1">
        Portfolio
      </h2>
      <p className="text-[13px] text-[#8b949e] mb-5">
        A collection of projects I&apos;ve built and contributed to
      </p>

      {/* Filter bar */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Search
            size={13}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8b949e]"
          />
          <input
            type="text"
            placeholder="Find a project..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-8 pr-4 py-1.5 bg-[#0d1117] border border-[#30363d] rounded-md text-[#f0f6fc] text-[13px] focus:outline-none focus:border-[#1f6feb] placeholder:text-[#8b949e] font-sans"
          />
        </div>
        <CustomSelect
          value="All"
          options={["All", "Frontend", "Full-stack", "AI"]}
        />
        <CustomSelect
          value="Language: All"
          options={["Language: All", "TypeScript", "JavaScript"]}
        />
      </div>

      {/* Projects list */}
      <div className="divide-y divide-[#21262d]">
        {filtered.map((project) => (
          <div key={project.name} className="py-5 flex gap-4">
            <div
              className="w-3 h-3 rounded-full border-2 shrink-0 mt-1"
              style={{
                borderColor: "#3178C6",
                backgroundColor: "#3178C6",
              }}
            />

            <div className="flex-1 min-w-0">
              {/* Name row */}
              <div className="flex flex-wrap items-center gap-2 mb-1.5">
                <span className="text-[#388bfd] text-[14px] font-semibold font-mono hover:underline cursor-pointer">
                  {project.name}
                </span>
                <span className="border border-[#30363d] rounded-full text-[11px] text-[#8b949e] px-2 py-0.5">
                  {project.visibility}
                </span>
              </div>

              {/* Description */}
              <p className="text-[13px] text-[#8b949e] leading-relaxed mb-3">
                {project.desc}
              </p>

              {/* Meta row */}
              <div className="flex flex-wrap items-center gap-3 md:gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono px-2 py-0.5 rounded-full border bg-gray-800 text-gray-200 border-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {project.demo && (
                  <a
                    href={project.demo}
                    className="flex items-center gap-1 text-[11px] text-[#388bfd] hover:underline"
                  >
                    <ExternalLink size={10} />
                    Demo
                  </a>
                )}
                <span className="text-[11px] text-[#8b949e]">
                  Updated {project.updated}
                </span>
              </div>
            </div>
          </div>
        ))}
        {filtered.length === 0 && (
          <p className="py-10 text-center text-[#8b949e] text-sm">
            No projects match &quot;{query}&quot;
          </p>
        )}
      </div>
    </div>
  );
}
