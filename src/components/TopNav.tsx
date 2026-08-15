"use client";
import { useState } from "react";
import { Search, Circle, Menu, X, Github } from "lucide-react";
import OverviewSection from "./OverviewSection";
import PortfolioSection from "./PortfolioSection";
import DevToolsSection from "./DevToolsSection";
import ContactSection from "./ContactSection";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { VscGithubProject } from "react-icons/vsc";
import { IoBookOutline } from "react-icons/io5";
import { IoCubeOutline } from "react-icons/io5";
import { GrContact } from "react-icons/gr";

type Tab = "overview" | "portfolio" | "devtools" | "contact" | "palette";

interface Props {
  activeTab: Tab;
  setActiveTab: (t: Tab) => void;
}

const tabs: { id: Tab; label: string; logo: React.ReactNode }[] = [
  {
    id: "overview",
    label: "Overview",
    logo: <IoBookOutline size={24} />,
  },
  {
    id: "portfolio",
    label: "Portfolio",
    logo: <VscGithubProject size={24} />,
  },
  {
    id: "devtools",
    label: "Dev Tools",
    logo: <IoCubeOutline size={24} />,
  },
  {
    id: "contact",
    label: "Contact",
    logo: <GrContact size={24} />,
  },
];

export default function TopNav({ activeTab, setActiveTab }: Props) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#010409] backdrop-blur border-b border-gray-800">
      <div className="flex items-center justify-between px-4 md:px-6 h-14 md:h-[62px] w-full mx-auto">
        {/* Brand */}
        <div className="flex items-center gap-2.5 font-mono text-sm font-bold text-[#f0f6fc] shrink-0">
          <FaGithub size={24} className="text-white" />

          <span className="hidden sm:block text-base">Wangariiisharon</span>
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
          <a
            href="https://www.linkedin.com/in/sharon-mwangi-656a17233"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={24} className="text-[#8b949e]" />
          </a>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-1.5 text-[#8b949e] hover:text-[#f0f6fc]"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <nav className=" border-t border-[#010409] bg-[#010409]">
        <div className="pl-4 w-full  mx-auto flex items-center  overflow-x-auto">
          {tabs.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setActiveTab(t.id)}
              className={`shrink-0 px-4 pb-2.5 pt-1 md:text-sm text-xs font-medium border-b-2 transition-colors  cursor-pointer whitespace-nowrap ${
                activeTab === t.id
                  ? "border-[#d29922] text-white font-bold"
                  : "border-transparent text-[#8b949e] hover:text-[#f0f6fc] hover:bg-[#161b22] font-normal"
              }`}
            >
              <span className="flex items-center gap-2">
                <span
                  className={
                    'flex items-center justify-center ${activeTab === t.id ? "text-white" : "text-[#f0f6fc]"}'
                  }
                >
                  {t.logo}
                </span>
                <span
                  className={
                    'flex items-center justify-center ${activeTab === t.id ? "text-white" : "text-[#f0f6fc]"}'
                  }
                >
                  {t.label}
                </span>
              </span>
            </button>
          ))}
        </div>
      </nav>

      {/* Mobile nav dropdown */}
      {/* {mobileOpen && (
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
              <span className="flex items-center gap-2">
                <span className="flex items-center justify-center">
                  {t.logo}
                </span>
                <span
                  className={
                    'flex items-center justify-center ${activeTab === t.id ? "text-white" : "text-[#f0f6fc]"}'
                  }
                >
                  {t.label}
                </span>
              </span>
            </button>
          ))}
        </div>
      )} */}
    </header>
  );
}
