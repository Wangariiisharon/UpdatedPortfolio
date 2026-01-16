"use client";
import { useState } from "react";
import Nav from "../components/nav";
import Profile from "./profile/page";
import Portfolio from "./portfolio/page";
import Image from "next/image";
import ColorPaletteGenerator from "./colorPalette/page";
import Example from "./contact/page";
import DevTools from "./devTools/page";

const App = () => {
  const [activePage, setActivePage] = useState("profile");

  const renderContent = () => {
    switch (activePage) {
      case "profile":
        return <Profile />;

      case "portfolio":
        return <Portfolio />;

      case "devTools":
        return <DevTools />;
      case "colorPalette":
        return <ColorPaletteGenerator />;

      case "contact":
        return <Example />;

      default:
        return null;
    }
  };
  return (
    <div className="min-h-screen text-white overflow-hidden">
      {/* Navigation */}
      <Nav activePage={activePage} setActivePage={setActivePage} />

      {/* Main Container */}

      <div className="flex flex-col xl:flex-row xl:gap-20 xl:px-60 xl:pt-8">
        {/* Left Sidebar - Fixed */}
        <aside className="xl:w-80 w-full p-6 xl:fixed xl:h-screen xl:overflow-y-auto xl:border-r xl:border-gray-800">
          <div className="flex xl:flex-col flex-row space-x-4 xl:space-x-0 items-center xl:items-start">
            <div className="">
              <Image
                src="/passport.jpg"
                alt="Profile Picture"
                width={200}
                height={200}
                className="rounded-full bg-gray-800 mb-4 border-4 border-gray-800 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40"
              />
            </div>

            <div>
              <p className="text-2xl font-bold mb-1">Sharon Mwangi</p>
              <p className="text-gray-400 mb-4 text-xl">Full-stack Developer</p>

              <p className="xl:block hidden text-sm text-gray-300 mb-6 text-balance">
                Full-stack developer with a deep passion for computer science.
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
                <a href="https://github.com/Wangariiisharon">Sharon-mwangi</a>
              </div>
              <div className="flex items-center gap-2">
                <span>💼 LinkedIn: </span>
                <a href="www.linkedin.com/in/sharon-mwangi-656a17233">
                  Sharon Mwangi
                </a>
              </div>
            </div>
          </div>

          <div className="xl:block hidden mt-8 bg-pink-500 rounded-lg p-4">
            <h3 className="font-bold text-white mb-2">Discover</h3>
            <h4 className="text-2xl font-bold text-white">MyPilot</h4>
          </div>
        </aside>

        <div className="h-6 bg-[#010409] w-full xl:hidden block"></div>

        {/* Main Content Area */}
        <main
          className="flex-1 px-8 pt-8 max-w-5xl
                 xl:ml-96 xl:flex xl:items-center"
        >
          <div className="w-full">{renderContent()}</div>
        </main>
      </div>
    </div>
  );
};

export default App;
