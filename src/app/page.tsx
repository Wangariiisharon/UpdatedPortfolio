"use client";
import { useState } from "react";
import TopNav from "@/components/TopNav";
import Sidebar from "@/components/Sidebar";
import OverviewSection from "@/components/OverviewSection";
import PortfolioSection from "@/components/PortfolioSection";
import DevToolsSection from "@/components/DevToolsSection";
import ContactSection from "@/components/ContactSection";
import PaletteSection from "@/components/PaletteSection";

type Tab = "overview" | "portfolio" | "devtools" | "contact" | "palette";

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>("overview");

  const switchTab = (t: Tab) => {
    setActiveTab(t);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const tabList = [
    { id: "overview" as Tab, label: "Overview" },
    { id: "portfolio" as Tab, label: "Portfolio", count: 5 },
    { id: "devtools" as Tab, label: "Dev Tools", count: 12 },
    { id: "contact" as Tab, label: "Contact" },
  ];

  return (
    <div className="min-h-screen bg-[#0d1117] text-[#f0f6fc]">
      <TopNav activeTab={activeTab} setActiveTab={switchTab} />

      {/* Mobile horizontal tabs */}
      <div className="md:hidden flex overflow-x-auto border-b border-[#21262d]">
        {tabList.map((t) => (
          <button
            key={t.id}
            onClick={() => switchTab(t.id)}
            className={`shrink-0 px-4 py-2.5 text-[12px] font-medium border-b-2 transition-colors cursor-pointer whitespace-nowrap ${
              activeTab === t.id
                ? "border-[#d29922] text-[#f0f6fc]"
                : "border-transparent text-[#8b949e] hover:text-[#f0f6fc]"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row">
          <Sidebar />

          <main className="flex-1 min-w-0 px-4 md:px-8 py-6">
            {/* Desktop page tabs */}
            <div className="hidden md:flex gap-0 border-b border-[#21262d] mb-6">
              {tabList.map((t) => (
                <button
                  key={t.id}
                  onClick={() => switchTab(t.id)}
                  className={`flex items-center gap-1.5 px-4 py-2.5 text-[13px] font-medium border-b-2 -mb-px transition-colors cursor-pointer ${
                    activeTab === t.id
                      ? "border-[#d29922] text-[#f0f6fc]"
                      : "border-transparent text-[#8b949e] hover:text-[#f0f6fc]"
                  }`}
                >
                  {t.label}
                  {t.count != null && (
                    <span className="bg-[#21262d] border border-[#30363d] rounded-full text-[11px] text-[#8b949e] px-1.5 py-0.5">
                      {t.count}
                    </span>
                  )}
                </button>
              ))}
            </div>

            {activeTab === "overview" && (
              <OverviewSection
                onContactClick={() => switchTab("contact")}
                onPortfolioClick={() => switchTab("portfolio")}
              />
            )}
            {activeTab === "portfolio" && <PortfolioSection />}
            {activeTab === "devtools" && <DevToolsSection />}
            {activeTab === "contact" && <ContactSection />}
          </main>
        </div>
      </div>
    </div>
  );
}
