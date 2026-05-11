"use client";

import { ReactNode } from "react";

type AppLayoutProps = {
  children: ReactNode;
  activePage: string;
  setActivePage: (page: string) => void;
};

const AppLayout = ({ children, activePage, setActivePage }: AppLayoutProps) => {
  return (
    <div className="min-h-screen text-white overflow-hidden flex flex-col">
      {/* Nav always on top */}

      {/* Page content */}
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default AppLayout;
