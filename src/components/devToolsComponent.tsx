"use client";
import React, { useState, useEffect } from "react";
import {
  Code2,
  Server,
  Database,
  Smartphone,
  Wrench,
  Palette,
  X,
  Copy,
  Check,
} from "lucide-react";
import { technologies } from "@/app/resources";

interface DevToolsProps {
  focusedTechName?: string | null;
}

export default function DevToolsClient({ focusedTechName }: DevToolsProps) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedTech, setSelectedTech] = useState<
    (typeof technologies)[number] | null
  >(null);
  const [copied, setCopied] = useState(false);
  const [highlightedTech, setHighlightedTech] = useState<string | null>(null);

  useEffect(() => {
    if (focusedTechName) {
      // Find and select the technology
      const tech = technologies.find((t) => t.name === focusedTechName);
      if (tech) {
        // Scroll to the focused technology
        setTimeout(() => {
          const element = document.getElementById(`tech-${focusedTechName}`);
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "center" });
            // Set highlight for visual feedback
            setHighlightedTech(focusedTechName);
            // Remove highlight after 3 seconds
            setTimeout(() => setHighlightedTech(null), 3000);
          }
        }, 100);
      }
    }
  }, [focusedTechName]);

  const categories = [
    { id: "all", label: "All Technologies", icon: Code2 },
    { id: "frontend", label: "Frontend", icon: Code2 },
    { id: "backend", label: "Backend", icon: Server },
    { id: "database", label: "Database", icon: Database },
    { id: "mobile", label: "Mobile", icon: Smartphone },
    { id: "tools", label: "Tools", icon: Wrench },
    { id: "design", label: "Design", icon: Palette },
  ];

  const filteredTechs =
    selectedCategory === "all"
      ? technologies
      : technologies.filter((t) => t.category === selectedCategory);

  const handleCopy = () => {
    if (selectedTech) {
      navigator.clipboard.writeText(selectedTech.codeSnippet);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="min-h-screen text-gray-100 border border-gray-800">
      {/* Header */}
      <div className="border-b border-gray-800 bg-[#010409]">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <h1 className="text-3xl font-bold mb-2">Dev Tools & Technologies</h1>
          <p className="text-gray-400">
            Click on any technology to see how I&apos;ve used it in real
            projects
          </p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="border-b border-gray-800 bg-[#010409]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-2 overflow-x-auto">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-3 border-b-2 transition-colors whitespace-nowrap ${
                    selectedCategory === cat.id
                      ? "border-orange-500 text-white"
                      : "border-transparent text-gray-400 hover:text-gray-200"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Technology Cards Grid */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTechs.map((tech, index) => (
            <div
              key={index}
              id={`tech-${tech.name}`}
              onClick={() => setSelectedTech(tech)}
              className={`group cursor-pointer border rounded-lg hover:border-orange-500 transition-all hover:shadow-lg hover:shadow-orange-500/20 overflow-hidden ${
                highlightedTech === tech.name
                  ? "border-blue-500 bg-blue-500/10 shadow-lg shadow-blue-500/20"
                  : "border-gray-800"
              }`}
            >
              <div className={`h-2 bg-gradient-to-r ${tech.color}`} />
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="text-4xl">{tech.icon}</div>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-orange-400 transition-colors">
                  {tech.name}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{tech.tagline}</p>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-500">Click to view code →</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Code Snippet */}
      {selectedTech && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedTech(null)}
        >
          <div
            className="bg-gray-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden border border-gray-700"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className={`bg-gradient-to-r ${selectedTech.color} p-6`}>
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-4xl">{selectedTech.icon}</span>
                    <h2 className="text-2xl font-bold text-white">
                      {selectedTech.name}
                    </h2>
                  </div>
                  <p className="text-white text-opacity-90">
                    {selectedTech.tagline}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedTech(null)}
                  className="p-2 hover:bg-white hover:bg-opacity-20 rounded transition-colors"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2 text-orange-400">
                  About
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {selectedTech.description}
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2 text-orange-400">
                  Projects Used In
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedTech.projects.map((project, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-800 text-gray-300 rounded-md text-sm border border-gray-700"
                    >
                      {project}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-orange-400">
                    Code Example
                  </h3>
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-2 px-3 py-1.5 bg-gray-800 hover:bg-gray-700 rounded text-sm transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        Copy Code
                      </>
                    )}
                  </button>
                </div>
                <pre className="bg-gray-950 border border-gray-800 rounded-lg p-4 overflow-x-auto">
                  <code className="text-sm text-gray-300 font-mono whitespace-pre">
                    {selectedTech.codeSnippet}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
