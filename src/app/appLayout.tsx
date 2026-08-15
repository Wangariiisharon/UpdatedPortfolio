"use client";

import { createContext, ReactNode, useContext, useState } from "react";
import TopNav from "@/components/TopNav";
import Sidebar from "@/components/Sidebar";

type Tab = "overview" | "portfolio" | "devtools" | "contact" | "palette";

type AppLayoutContextValue = {
  activeTab: Tab;
  switchTab: (tab: Tab) => void;
};

const AppLayoutContext = createContext<AppLayoutContextValue | null>(null);

export const useAppLayout = () => {
  const context = useContext(AppLayoutContext);

  if (!context) {
    throw new Error("useAppLayout must be used within AppLayout");
  }

  return context;
};

type AppLayoutProps = {
  children: ReactNode;
};

const AppLayout = ({ children }: AppLayoutProps) => {
  const [activeTab, setActiveTab] = useState<Tab>("overview");

  const switchTab = (tab: Tab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AppLayoutContext.Provider value={{ activeTab, switchTab }}>
      <div className="flex h-screen flex-col  bg-[#0D1117] text-[#f0f6fc]">
        <TopNav activeTab={activeTab} setActiveTab={switchTab} />

        <div className="mx-auto w-full max-w-screen-xl flex-1 md:overflow-hidden">
          <div className="flex h-full flex-col md:flex-row">
            <div className="md:sticky md:top-[62px] md:self-start md:h-[calc(100vh-62px)]">
              <Sidebar />
            </div>

            <main className="flex-1 min-w-0 overflow-y-auto [&::-webkit-scrollbar]:hidden">
              {children}
            </main>
          </div>
        </div>
      </div>
    </AppLayoutContext.Provider>
  );
};

export default AppLayout;
