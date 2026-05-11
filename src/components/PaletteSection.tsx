import { paletteTokens } from "../app/data";

export default function PaletteSection() {
  return (
    <div>
      <h2 className="text-xl md:text-2xl font-semibold text-[#f0f6fc] mb-1">
        Color Palette
      </h2>
      <p className="text-[13px] text-[#8b949e] mb-6">
        GitHub-inspired design tokens used throughout this portfolio
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-8">
        {paletteTokens.map((t) => (
          <div
            key={t.name}
            className="border border-[#30363d] rounded-md overflow-hidden"
          >
            <div className="h-16 md:h-20" style={{ background: t.hex }} />
            <div className="bg-[#161b22] px-3 py-2.5">
              <p className="text-[12px] font-semibold text-[#f0f6fc] font-mono">
                {t.name}
              </p>
              <p className="text-[11px] text-[#8b949e] font-mono">{t.hex}</p>
              <p className="text-[11px] text-[#8b949e] mt-0.5">{t.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Typography */}
      <div className="bg-[#161b22] border border-[#30363d] rounded-md p-5">
        <p className="text-[12px] font-semibold text-[#3fb950] font-mono uppercase tracking-wider mb-4">
          Typography
        </p>
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <span
              className="text-2xl font-semibold text-[#f0f6fc]"
              style={{ fontFamily: "'Mona Sans', system-ui, sans-serif" }}
            >
              Mona Sans
            </span>
            <span className="text-[12px] text-[#8b949e]">
              — headings, UI, body text
            </span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <span className="text-xl font-medium text-[#3fb950] font-mono">
              JetBrains Mono
            </span>
            <span className="text-[12px] text-[#8b949e]">
              — code, badges, handles, names
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
