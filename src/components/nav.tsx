"use client";
import React, { useState } from "react";
import {
  User,
  Settings,
  Search,
  Menu,
  NotebookPen,
  ChevronsLeftRightEllipsis,
  ContactRound,
  Palette,
} from "lucide-react";
import GlobalSearch from "./search";

export default function Nav({
  activePage,
  setActivePage,
}: {
  activePage: string;
  setActivePage: (page: string) => void;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [focusedItem, setFocusedItem] = useState<{
    type: string;
    id: number;
  } | null>(null);

  const navItems = [
    { id: "profile", label: "Profile", icon: NotebookPen },
    { id: "portfolio", label: "Portfolio", icon: ChevronsLeftRightEllipsis },
    { id: "devTools", label: "Dev Tools", icon: NotebookPen },
    { id: "contact", label: "Contact", icon: ContactRound },
    { id: "colorPalette", label: "Color Palette", icon: Palette },
  ];

  return (
    <div className="bg-[#010409] border-b border-gray-800 px-6">
      <header className="px-6 py-3 w-full overflow-hidden">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-transparent rounded border border-gray-600 flex items-center justify-center font-bold">
                SM
              </div>
              <span className="xl:font-semibold xl:block hidden">
                Sharon Mwangi
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <GlobalSearch
              setActivePage={setActivePage}
              setFocusedItem={setFocusedItem}
            />
            <User className="w-5 h-5 text-white cursor-pointer" />
            <span className="px-2 py-1 bg-gray-800 rounded text-sm">SM</span>
          </div>
        </div>
      </header>
      <nav className="bg-[#010409] relative">
        <div className="flex items-center justify-between xl:justify-start xl:gap-6 gap-3">
          {/* LEFT: Tabs */}
          <div className="flex gap-3 xl:gap-6">
            {/* Mobile + Desktop */}
            {navItems
              .filter((item) =>
                ["profile", "portfolio", "contact"].includes(item.id)
              )
              .map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActivePage(item.id)}
                  className={`px-2 py-3 text-sm font-medium border-b-2 transition-colors ${
                    activePage === item.id
                      ? "border-orange-500 text-white"
                      : "border-transparent text-gray-400 hover:text-gray-200"
                  }`}
                >
                  <span className="mr-2  inline-flex">
                    {React.createElement(item.icon)}
                  </span>
                  <span className=" sm:inline">{item.label}</span>
                </button>
              ))}

            {/* Desktop-only extra tabs */}
            <div className="hidden xl:flex gap-6">
              {navItems
                .filter((item) =>
                  ["devTools", "colorPalette"].includes(item.id)
                )
                .map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActivePage(item.id)}
                    className={`px-2 py-3 text-sm font-medium border-b-2 transition-colors ${
                      activePage === item.id
                        ? "border-orange-500 text-white"
                        : "border-transparent text-gray-400 hover:text-gray-200"
                    }`}
                  >
                    <span className="mr-2 inline-flex">
                      {React.createElement(item.icon)}
                    </span>
                    {item.label}
                  </button>
                ))}
            </div>
          </div>

          {/* RIGHT: Hamburger (mobile only) */}
          <div className="xl:hidden relative">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 text-gray-400 hover:text-white"
            >
              <Menu className="w-5 h-5" />
            </button>

            {menuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-[#0d1117] border border-gray-800 rounded-md shadow-lg z-50">
                {navItems
                  .filter((item) =>
                    ["devTools", "colorPalette"].includes(item.id)
                  )
                  .map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        setActivePage(item.id);
                        setMenuOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-800"
                    >
                      <span className="mr-2  inline-flex">
                        {React.createElement(item.icon)}
                      </span>
                      {item.label}
                    </button>
                  ))}
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
