"use client";
import React from "react";
import { Github, ExternalLink, Calendar } from "lucide-react";
import { projects, technologiesColor } from "../app/resources";

export function Profile({
  setActivePage,
}: {
  setActivePage?: (page: string) => void;
}) {
  const techColors = {
    "Next.js": "bg-gray-800 text-white",
    React: "bg-blue-600 text-white",
    TypeScript: "bg-blue-700 text-white",
    "Node.js": "bg-green-600 text-white",
    MongoDB: "bg-green-700 text-white",
    PostgreSQL: "bg-blue-800 text-white",
    Redux: "bg-purple-600 text-white",
    Firebase: "bg-orange-500 text-white",
    "React Native": "bg-cyan-600 text-white",
    CSS: "bg-blue-500 text-white",
    TailwindCSS: "bg-cyan-500 text-white",
    Sanity: "bg-red-600 text-white",
  };

  // Get first two projects
  const pinnedProjects = (projects ?? []).slice(0, 2);

  return (
    <div className="space-y-6 min-h-screen">
      <div className="border border-gray-800 p-8">
        <div className="text-sm text-gray-400 mb-4">
          Sharon-Mwangi / README.md
        </div>

        <h1 className="mt-6 text-4xl font-bold text-white mb-6 border-b border-gray-800 p-4">
          Hi 👋, I&apos;m Sharon Mwangi
        </h1>

        <p className="mt-6 text-gray-300 text-lg leading-relaxed mb-6">
          I&apos;m a developer passionate about crafting accessible,
          pixel-perfect user interfaces that blend thoughtful design with robust
          engineering. My favorite work is in the intersection of design and
          development, where I create visually stunning experiences that are
          also carefully built for usability and performance.
        </p>
        <button
          onClick={() => setActivePage?.("contact")}
          className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md font-medium transition-colors"
        >
          Get in Touch
        </button>

        <div className="mt-8">
          <h2 className="text-2xl font-bold text-white mb-6">
            Technologies I&apos;ve Worked With:
          </h2>

          <div className="flex flex-wrap gap-2">
            {technologiesColor.map((tech) => (
              <span
                key={tech.name}
                style={{ backgroundColor: tech.color }}
                className="text-white px-3 py-1.5 rounded text-sm font-medium"
              >
                {tech.name}
              </span>
            ))}
          </div>

          <p className="text-gray-400 text-sm mt-8">
            This website is inspired by the design of GitHub.
          </p>
        </div>
      </div>

      <div className="pt-8">
        <h3 className="text-xl font-bold text-white mb-4">Pinned</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4  border border-gray-800 p-8">
          {pinnedProjects.map((project) => (
            <div
              key={project.id}
              className="border border-gray-800 rounded-lg hover:border-gray-700 transition-all hover:shadow-lg hover:shadow-orange-500/10"
            >
              <div className="p-6">
                {/* Project Header */}
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-blue-400 hover:underline cursor-pointer mb-1">
                      {project.name}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Calendar className="w-3 h-3" />
                      <span>
                        Updated{""}
                        {new Date(project.updated).toLocaleDateString("en-US", {
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={project.link}
                      className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded transition-colors"
                      title="Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.topics.map((tech, index) => (
                    <span
                      key={index}
                      className={`px-2.5 py-1 rounded text-xs font-medium ${
                        techColors[tech as keyof typeof techColors] ||
                        "bg-gray-800 text-gray-300"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
