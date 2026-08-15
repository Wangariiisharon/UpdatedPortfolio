import { Pin, BookOpen, ExternalLink } from "lucide-react";
import SkillsRadar from "./skills";

import { techStack, projects } from "../app/data";

interface Props {
  onContactClick: () => void;
  onPortfolioClick: () => void;
}

export default function OverviewSection({
  onContactClick,
  onPortfolioClick,
}: Props) {
  const pinnedNames = [
    "SongaTrack",
    "ContextAI",
    "Norah Digital",
    "Elevate Wellness",
  ];
  const pinnedProjects = projects.filter((p) => pinnedNames.includes(p.name));

  return (
    <div>
      {/* README card */}
      <div className="bg-transparent border border-gray-800 rounded-md overflow-hidden mb-6">
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-gray-800 bg-transparent">
          <div className="flex items-center gap-2 text-[13px] text-[#8b949e] font-mono">
            <BookOpen size={13} />
            <span>
              <strong className="text-[#f0f6fc]">Sharon-Mwangi</strong> /
              README.md
            </span>
          </div>
          <span className="text-[11px] text-[#8b949e] font-mono">Markdown</span>
        </div>
        <div className="px-6 md:px-8 py-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#f0f6fc] mb-4 leading-tight">
            Hi 👋, I&apos;m Sharon Mwangi
          </h2>
          <p className="text-[#c9d1d9] text-sm md:text-base leading-relaxed mb-3">
            I&apos;m a developer passionate about crafting accessible,
            pixel-perfect user interfaces that blend thoughtful design with
            robust engineering. My favorite work is in the intersection of
            design and development, where I create visually stunning experiences
            that are also carefully built for usability and performance.
          </p>

          <button
            onClick={onContactClick}
            className="inline-flex items-center gap-2 px-5 py-2 bg-[#238636] border border-[#1a7f37] rounded-md text-white text-sm font-medium hover:bg-[#2ea043] transition-colors cursor-pointer mb-10"
          >
            Get in Touch
          </button>

          <h3 className="text-sm font-semibold text-[#f0f6fc] mb-3 pb-2 border-b border-gray-800">
            Technologies I&apos;ve Worked With
          </h3>
          <div className="flex flex-wrap gap-1.5 mb-6">
            {techStack.map((t) => (
              <div
                key={t.label}
                className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono border border-gray-700 bg-transparent`}
              >
                {t.label}
              </div>
            ))}
          </div>
          <p className="text-[12px] text-[#8b949e] mb-5">
            This website is inspired by the design of GitHub.
          </p>
        </div>
      </div>
      {/* Contribution graph */}
      {/* <ContribGraph username="Wangariiisharon" joinYear={2022} />{" "} */}
      {/* <ContribGraph joinYear={2022} /> */}

      {/* Pinned Project */}
      <div className="flex items-center gap-2 text-[13px] font-semibold text-[#8b949e] mb-3">
        <Pin size={13} />
        Pinned
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {pinnedProjects.map((project, i) => (
          <div
            key={project.name}
            onClick={onPortfolioClick}
            className="group relative  border border-gray-700 bg-transparent rounded-md p-4 flex flex-col gap-2 hover:border-[#8b949e] transition-all cursor-pointer overflow-hidden"
          >
            <div className="absolute inset-x-0 top-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="flex items-center gap-2">
              <BookOpen size={14} className="text-[#8b949e] shrink-0" />
              <span className="text-[#388bfd] text-[13px] font-semibold font-mono">
                {project.name}
              </span>
              <span className="border border-[#30363d] rounded-full text-[11px] text-[#8b949e] px-2 py-0.5">
                {project.visibility}
              </span>
            </div>
            <p className="text-[12px] text-[#8b949e] leading-relaxed flex-1">
              {project.desc}
            </p>
            <div className="flex flex-wrap gap-1">
              {project.stack.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-mono px-2 py-0.5 rounded-full border bg-gray-800 text-gray-200 border-gray-700"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-3 text-[11px] text-[#8b949e] mt-1">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#3178c6] inline-block" />
                TypeScript
              </span>
              <span>Updated {project.updated}</span>
            </div>
          </div>
        ))}
      </div>
      <SkillsRadar />
    </div>
  );
}
