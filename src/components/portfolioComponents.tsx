"use client";
import React, { useState, useEffect } from "react";
import { Search, Circle, Eye } from "lucide-react";
import { technologiesColor, projects } from "@/app/resources";
import Link from "next/link";

export default function PortfolioComponnt({
  focusedProjectId,
}: {
  focusedProjectId?: number | string | null;
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("updated");
  const [filterType, setFilterType] = useState("all");
  const [filterLanguage, setFilterLanguage] = useState("all");
  const [highlightedId, setHighlightedId] = useState<number | string | null>(
    null
  );

  useEffect(() => {
    if (focusedProjectId) {
      // Scroll to the focused project
      setTimeout(() => {
        const element = document.getElementById(`project-${focusedProjectId}`);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
          // Set highlight for visual feedback
          setHighlightedId(focusedProjectId);
          // Remove highlight after 3 seconds
          setTimeout(() => setHighlightedId(null), 3000);
        }
      }, 100);
    }
  }, [focusedProjectId]);

  const languages = [
    "all",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Firebase",
  ];
  const types = [
    { value: "all", label: "All" },
    { value: "public", label: "Public" },
    { value: "private", label: "Private" },
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLanguage =
      filterLanguage === "all" || project.topics.includes(filterLanguage);
    return matchesSearch && matchesLanguage;
  });

  return (
    <div className="min-h-screen text-white">
      {/* Header */}
      <div className="border-b border-gray-800 bg-[#0d1117]">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <h1 className="text-2xl font-semibold mb-2">Portfolio</h1>
          <p className="text-gray-400">
            A collection of projects I&apos;ve built and contributed to
          </p>
        </div>
      </div>

      {/* Search and Filters Bar */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input
                type="text"
                placeholder="Find a project..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent border border-gray-700 rounded-md pl-10 pr-4 py-2 text-sm text-gray-300 placeholder-gray-500 focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Filters */}
            <div className="flex gap-2">
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="bg-transparent border border-gray-700 rounded-md px-3 py-2 text-sm text-gray-300 focus:outline-none focus:border-blue-500"
              >
                {types.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>

              <select
                value={filterLanguage}
                onChange={(e) => setFilterLanguage(e.target.value)}
                className="bg-transparent border border-gray-700 rounded-md px-3 py-2 text-sm text-gray-300 focus:outline-none focus:border-blue-500"
              >
                <option value="all">Language: All</option>
                {languages.slice(1).map((lang) => (
                  <option key={lang} value={lang}>
                    {lang}
                  </option>
                ))}
              </select>
              {/* 
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent border border-gray-700 rounded-md px-3 py-2 text-sm text-gray-300 focus:outline-none focus:border-blue-500"
              >
                <option value="updated">Last updated</option>
                <option value="name">Name</option>
                <option value="stars">Stars</option>
              </select> */}
              <button className="bg-[#29903B] rounded-md px-3 py-2 text-sm text-gray-300">
                Ask MyPilot
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Projects List */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="space-y-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="border-b border-gray-800 pb-6 hover:bg-gray-900/30 -mx-6 px-6 py-4 transition-colors"
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-semibold text-blue-400 hover:underline cursor-pointer">
                      {project.name}
                    </h3>
                    <span className="px-2 py-0.5 text-xs border border-gray-700 rounded-full text-gray-400">
                      {project.isPublic ? "Public" : "Private"}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm mb-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Topics/Tags */}
              {project.topics && project.topics.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.topics.map((topic, index) => {
                    const techEntry = technologiesColor.find(
                      (t) => t.name.toLowerCase() === topic.toLowerCase()
                    );

                    return (
                      <div
                        key={index}
                        className="flex items-center gap-1.5 px-2.5 py-1 bg-blue-900/30 text-blue-400 rounded-full text-xs font-medium border border-blue-800/50 hover:bg-blue-900/50 cursor-pointer transition-colors"
                      >
                        <Circle
                          className="w-3 h-3"
                          fill={techEntry?.color}
                          color={techEntry?.color}
                        />
                        <span>{topic}</span>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Project Meta Info */}
              <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500">
                <div className="flex items-center gap-1.5">
                  <Eye className="w-3 h-3" />
                  <Link href="">Demo</Link>
                </div>

                <span>Updated {project.updated}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg mb-2">No projects found</p>
            <p className="text-gray-600 text-sm">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}

        {/* Results Count */}
        <div className="mt-8 text-center text-sm text-gray-500">
          Showing {filteredProjects.length} of {projects.length} projects
        </div>
      </div>
    </div>
  );
}
