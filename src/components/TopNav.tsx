"use client";
import { useState } from "react";
import { Search, Circle, Menu, X, Github } from "lucide-react";

type Tab = "overview" | "portfolio" | "devtools" | "contact" | "palette";

interface Props {
  activeTab: Tab;
  setActiveTab: (t: Tab) => void;
}

const tabs: { id: Tab; label: string }[] = [
  { id: "overview", label: "Overview" },
  { id: "portfolio", label: "Portfolio" },
  { id: "devtools", label: "Dev Tools" },
  { id: "contact", label: "Contact" },
  { id: "palette", label: "Color Palette" },
];

export default function TopNav({ activeTab, setActiveTab }: Props) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0d1117]/95 backdrop-blur border-b border-[#21262d]">
      <div className="flex items-center justify-between px-4 md:px-6 h-14 md:h-[62px] max-w-screen-xl mx-auto">
        {/* Brand */}
        <div className="flex items-center gap-2.5 font-mono text-sm font-bold text-[#f0f6fc] shrink-0">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#1a7f37] to-[#238636] flex items-center justify-center text-xs font-bold border-2 border-[#30363d]">
            SM
          </div>
          <span className="hidden sm:block">Sharon-Mwangi</span>
        </div>
        {/* Search */}
        <div>
          <div className="hidden lg:flex items-center gap-2 bg-[#0d1117] border border-[#30363d] rounded-md px-3 py-1.5 text-[#8b949e] text-xs w-72 hover:border-[#1f6feb] transition-colors cursor-pointer">
            <Search size={13} />
            <span>Search projects...</span>
            <span className="ml-auto font-mono border border-[#30363d] rounded px-1">
              /
            </span>
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-1.5 text-[13px] text-[#8b949e]">
            <span
              className="w-2 h-2 rounded-full bg-[#3fb950] inline-block animate-[pulse_2s_infinite]"
              aria-hidden="true"
            />
            <span className="hidden lg:block">Available for work</span>
          </div>

          <Github size={20} className="text-[#8b949e]" />

          {/* Mobile menu button */}
          <button
            className="md:hidden p-1.5 text-[#8b949e] hover:text-[#f0f6fc]"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile nav dropdown */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[#21262d] bg-[#0d1117]">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => {
                setActiveTab(t.id);
                setMobileOpen(false);
              }}
              className={`w-full text-left px-5 py-3 text-sm transition-colors ${
                activeTab === t.id
                  ? "text-[#f0f6fc] bg-[#161b22] border-l-2 border-[#3fb950]"
                  : "text-[#8b949e] hover:text-[#f0f6fc] hover:bg-[#161b22]"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
