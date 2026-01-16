"use client";
import React, { useState } from "react";
import { ExternalLink, Github, Calendar } from "lucide-react";
import { Listbox } from "@headlessui/react";
import { ChevronDown } from "lucide-react";
import { projects } from "../resources";

const Portfolio = () => {
  const [filter, setFilter] = useState("all");

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Apps" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "tools", label: "Tools & Libraries" },
  ];

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

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
  };

  return (
    <div className="min-h-screen border border-gray-800 text-gray-100">
      {/* Header */}
      <div className="border-b border-gray-800 bg-[#010409]">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <h1 className="text-3xl font-bold mb-2">Portfolio</h1>
          <p className="text-gray-400">
            A collection of projects I&apos;ve built and contributed to
          </p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="border-b border-gray-800 bg-[#010409]">
        <div className="max-w-7xl mx-auto px-6">
          {/* Listbox for small screens */}
          <div className="relative block xl:hidden mb-4">
            <Listbox value={filter} onChange={setFilter}>
              <div className="relative">
                {/* Button */}
                <Listbox.Button className="w-full flex items-center justify-between px-4 py-3 border border-gray-800 bg-[#010409] text-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-orange-500">
                  <span>
                    {categories.find((c) => c.id === filter)?.label} (
                    {filter === "all"
                      ? projects.length
                      : projects.filter((p) => p.category === filter).length}
                    )
                  </span>
                  <ChevronDown className="w-4 h-4" />
                </Listbox.Button>

                {/* Options */}
                <Listbox.Options className="absolute left-0 top-full mt-2 w-full bg-[#010409] border border-gray-800 rounded-md shadow-lg z-50">
                  {categories.map((cat) => {
                    const count =
                      cat.id === "all"
                        ? projects.length
                        : projects.filter((p) => p.category === cat.id).length;

                    return (
                      <Listbox.Option
                        key={cat.id}
                        value={cat.id}
                        className={({ active }) =>
                          `cursor-pointer px-4 py-3 text-sm flex justify-between ${
                            active ? "bg-gray-800 text-white" : "text-gray-400"
                          }`
                        }
                      >
                        <span>{cat.label}</span>
                        <span className="text-xs bg-gray-800 px-2 py-0.5 rounded-full">
                          {count}
                        </span>
                      </Listbox.Option>
                    );
                  })}
                </Listbox.Options>
              </div>
            </Listbox>
          </div>

          {/* Desktop buttons (unchanged) */}
          <div className="hidden xl:flex gap-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-4 py-3 border-b-2 transition-colors ${
                  filter === cat.id
                    ? "border-orange-500 text-white"
                    : "border-transparent text-gray-400 hover:text-gray-200"
                }`}
              >
                {cat.label}
                <span className="ml-2 px-2 py-0.5 rounded-full bg-gray-800 text-xs">
                  {cat.id === "all"
                    ? projects.length
                    : projects.filter((p) => p.category === cat.id).length}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="border border-gray-800 rounded-lg bg-[#010409] hover:border-gray-700 transition-all hover:shadow-lg hover:shadow-orange-500/10"
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
                        Updated{" "}
                        {new Date(project.date).toLocaleDateString("en-US", {
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded transition-colors"
                      title="View on GitHub"
                    >
                      <Github className="w-4 h-4" />
                    </a>
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
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className={`px-2.5 py-1 rounded text-xs font-medium ${
                        techColors[tech as keyof typeof techColors] ||
                        "bg-gray-800 text-gray-300"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Stats */}
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">
              No projects found in this category
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
