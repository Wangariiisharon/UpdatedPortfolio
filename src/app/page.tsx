"use client";
import { useState } from "react";
import Nav from "../components/nav";
import PortfolioComponent from "@/components/portfolioComponents";
import Image from "next/image";
import ColorPaletteGenerator from "./colorPalette/page";
import Example from "./contact/page";
import DevToolsClient from "@/components/devToolsComponent";
import { Profile } from "../components/profileComponent";

const App = () => {
  const [activePage, setActivePage] = useState("profile");
  const [focusedItem, setFocusedItem] = useState<{
    type: string;
    id: number;
  } | null>(null);

  const renderContent = () => {
    switch (activePage) {
      case "profile":
        return <Profile setActivePage={setActivePage} />;

      case "portfolio":
        return (
          <PortfolioComponent
            focusedProjectId={
              focusedItem?.type === "project" ? focusedItem.id : null
            }
          />
        );

      case "devTools":
        return (
          <DevToolsClient
            focusedTechName={
              focusedItem?.type === "technology" ? String(focusedItem.id) : null
            }
          />
        );

      case "colorPalette":
        return <ColorPaletteGenerator />;

      case "contact":
        return <Example />;

      default:
        return null;
    }
  };

  return (
    <div className="pt-20 min-h-screen text-white overflow-hidden">
      {/* Navigation */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Nav activePage={activePage} setActivePage={setActivePage} />
      </div>

      {/* Main Container */}
      <div className="flex flex-col xl:flex-row xl:px-60 xl:pt-8">
        {/* Left Sidebar - Fixed */}
        <aside className="xl:w-80 w-full xl:p-6 px-6 pb-6 pt-16 xl:fixed xl:h-screen xl:overflow-y-auto">
          <div className="flex xl:flex-col flex-row space-x-4 xl:space-x-0 items-center xl:items-start">
            {/* Profile Picture - Responsive and Always Round */}
            <div className="flex-shrink-0">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 xl:w-[300px] xl:h-[300px]">
                <Image
                  src="/passport.jpg"
                  alt="Profile Picture"
                  fill
                  className="rounded-full bg-gray-800 border-4 border-gray-800 object-cover object-center"
                  priority
                />
              </div>
            </div>

            <div className="flex-1 xl:flex-none">
              <p className="text-xl sm:text-2xl font-bold mb-1 xl:mt-12 mt-0">
                Sharon Mwangi
              </p>
              <p className="text-gray-400 mb-4 text-base sm:text-xl">
                Software Engineer
              </p>

              <p className="xl:block hidden text-sm text-gray-300 mb-6 text-balance">
                Software Engineer with a deep passion for computer science.
                Currently working on cool web and mobile projects.
              </p>
            </div>

            <div className="w-full xl:block hidden space-y-2 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <span>📍</span>
                <span>/home/sharon-mwangi</span>
              </div>
              <div className="flex items-center gap-2">
                <span>✉️ Email: </span>
                <span>mwangiiisharon@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <span>🐙 Github: </span>
                <a
                  href="https://github.com/Wangariiisharon"
                  className="hover:text-blue-400 transition-colors"
                >
                  Sharon-mwangi
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span>💼 LinkedIn: </span>
                <a
                  href="https://www.linkedin.com/in/sharon-mwangi-656a17233"
                  className="hover:text-blue-400 transition-colors"
                >
                  Sharon Mwangi
                </a>
              </div>
            </div>
          </div>
        </aside>

        <div className="h-6 bg-[#010409] w-full xl:hidden block"></div>

        {/* Main Content Area */}
        <main className="flex-1 px-8 pt-8 max-w-5xl xl:ml-96 xl:flex xl:items-center">
          <div className="w-full">{renderContent()}</div>
        </main>
      </div>
    </div>
  );
};

export default App;
