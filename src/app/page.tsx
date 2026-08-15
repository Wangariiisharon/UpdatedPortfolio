"use client";

import OverviewSection from "@/components/OverviewSection";
import PortfolioSection from "@/components/PortfolioSection";
import DevToolsSection from "@/components/DevToolsSection";
import ContactSection from "@/components/ContactSection";
import { useAppLayout } from "./appLayout";

export default function Home() {
  const { activeTab, switchTab } = useAppLayout();

  const tabList = [
    { id: "overview" as const, label: "Overview" },
    { id: "portfolio" as const, label: "Portfolio", count: 5 },
    { id: "devtools" as const, label: "Dev Tools", count: 12 },
    { id: "contact" as const, label: "Contact" },
  ];

  return (
    <>
      {/* <div className="md:hidden flex overflow-x-auto border-b border-[#21262d]">
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
      </div> */}

      <div className="px-4 md:px-8 py-6">
        {activeTab === "overview" && (
          <OverviewSection
            onContactClick={() => switchTab("contact")}
            onPortfolioClick={() => switchTab("portfolio")}
          />
        )}
        {activeTab === "portfolio" && <PortfolioSection />}
        {activeTab === "devtools" && <DevToolsSection />}
        {activeTab === "contact" && <ContactSection />}
      </div>
    </>
  );
}
