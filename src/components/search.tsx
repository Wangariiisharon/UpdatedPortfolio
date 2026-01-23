"use client";

import { useState, useEffect, useRef } from "react";
import { Search, X, FolderGit2, Wrench } from "lucide-react";
import { projects, technologies } from "@/app/resources";
import { FocusedItem } from "@/app/resources";

type SearchResult = {
  id: string | number;
  name: string;
  type: "project" | "technology";
  description: string;
  topics?: string[];
  category?: string;
};

type GlobalSearchProps = {
  setActivePage: (page: string) => void;
  setFocusedItem?: (item: FocusedItem) => void;
};

export default function GlobalSearch({
  setActivePage,
  setFocusedItem,
}: GlobalSearchProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Combine projects and technologies into searchable items
  const allItems: SearchResult[] = [
    ...projects.map((project) => ({
      id: project.id,
      name: project.name,
      type: "project" as const,
      description: project.description,
      topics: project.topics,
    })),
    ...technologies.map((tech) => ({
      id: tech.id,
      name: tech.name,
      type: "technology" as const,
      description: tech.description,
      category: tech.category,
    })),
  ];

  // Search functionality
  useEffect(() => {
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }

    const query = searchQuery.toLowerCase();
    const filtered = allItems.filter((item) => {
      const nameMatch = item.name.toLowerCase().includes(query);
      const descMatch = item.description.toLowerCase().includes(query);
      const topicsMatch = item.topics?.some((topic) =>
        topic.toLowerCase().includes(query)
      );
      return nameMatch || descMatch || topicsMatch;
    });

    setResults(filtered);
    setSelectedIndex(0);
  }, [searchQuery]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Cmd+K or Ctrl+K to open search
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen(true);
        setTimeout(() => inputRef.current?.focus(), 100);
      }

      // Escape to close
      if (e.key === "Escape") {
        setIsOpen(false);
        setSearchQuery("");
      }

      // Navigate results with arrow keys
      if (isOpen && results.length > 0) {
        if (e.key === "ArrowDown") {
          e.preventDefault();
          setSelectedIndex((prev) =>
            prev < results.length - 1 ? prev + 1 : prev
          );
        }
        if (e.key === "ArrowUp") {
          e.preventDefault();
          setSelectedIndex((prev) => (prev > 0 ? prev - 1 : prev));
        }
        if (e.key === "Enter") {
          e.preventDefault();
          handleSelectResult(results[selectedIndex]);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, results, selectedIndex]);

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const handleSelectResult = (result: SearchResult) => {
    setActivePage(result.type === "project" ? "portfolio" : "devTools");

    setFocusedItem?.({
      type: result.type,
      id: Number(result.id),
    });

    setIsOpen(false);
    setSearchQuery("");
  };

  return (
    <>
      {/* Search Trigger Button */}
      <button
        onClick={() => {
          setIsOpen(true);
          setTimeout(() => inputRef.current?.focus(), 100);
        }}
        className="flex items-center gap-2 px-4 py-2  border border-gray-700 rounded-lg transition-colors text-sm text-gray-300"
      >
        <Search className="w-4 h-4" />
        <span className="hidden sm:inline">Search projects & tools...</span>
        <span className="sm:hidden">Search...</span>
      </button>

      {/* Search Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-start justify-center pt-20 px-4">
          <div
            ref={searchRef}
            className="w-full max-w-2xl bg-[#0D1117] border border-gray-800 rounded-xl shadow-2xl overflow-hidden animate-slideDown"
          >
            {/* Search Input */}
            <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-700">
              <Search className="w-5 h-5 text-gray-400" />
              <input
                ref={inputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects and technologies..."
                className="flex-1 bg-transparent outline-none text-white placeholder-gray-500"
                autoFocus
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="p-1 hover:bg-gray-800 rounded"
                >
                  <X className="w-4 h-4 text-gray-400" />
                </button>
              )}
            </div>

            {/* Results */}
            <div className="max-h-[400px] overflow-y-auto">
              {!searchQuery && (
                <div className="p-8 text-center text-gray-500">
                  <Search className="w-12 h-12 mx-auto mb-3 opacity-50" />
                  <p className="text-sm">
                    Start typing to search projects and tools
                  </p>
                  <p className="text-xs mt-2 text-gray-600">
                    Try &quot;React&quot;, &quot;Next.js&quot;, or any project
                    name
                  </p>
                </div>
              )}

              {searchQuery && results.length === 0 && (
                <div className="p-8 text-center text-gray-500">
                  <p className="text-sm">
                    No results found for &quot;{searchQuery}&quot;
                  </p>
                </div>
              )}

              {results.length > 0 && (
                <div className="py-2">
                  {results.map((result, index) => (
                    <button
                      key={`${result.type}-${result.id}`}
                      onClick={() => handleSelectResult(result)}
                      className={`w-full px-4 py-3 flex items-start gap-3 hover:bg-gray-800 transition-colors ${
                        index === selectedIndex ? "bg-gray-800" : ""
                      }`}
                    >
                      <div
                        className={`mt-1 p-2 rounded-lg ${
                          result.type === "project"
                            ? "bg-blue-500/10 text-blue-400"
                            : "bg-purple-500/10 text-purple-400"
                        }`}
                      >
                        {result.type === "project" ? (
                          <FolderGit2 className="w-4 h-4" />
                        ) : (
                          <Wrench className="w-4 h-4" />
                        )}
                      </div>

                      <div className="flex-1 text-left">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-white">
                            {result.name}
                          </h3>
                          <span
                            className={`text-xs px-2 py-0.5 rounded ${
                              result.type === "project"
                                ? "bg-blue-500/10 text-blue-400"
                                : "bg-purple-500/10 text-purple-400"
                            }`}
                          >
                            {result.type}
                          </span>
                        </div>
                        <p className="text-sm text-gray-400 line-clamp-1">
                          {result.description}
                        </p>
                        {result.topics && result.topics.length > 0 && (
                          <div className="flex flex-wrap gap-1 mt-2">
                            {result.topics.slice(0, 3).map((topic) => (
                              <span
                                key={topic}
                                className="text-xs px-2 py-0.5 bg-gray-800 text-gray-300 rounded"
                              >
                                {topic}
                              </span>
                            ))}
                            {result.topics.length > 3 && (
                              <span className="text-xs text-gray-500">
                                +{result.topics.length - 3} more
                              </span>
                            )}
                          </div>
                        )}
                      </div>

                      {index === selectedIndex && (
                        <div className="mt-1 text-xs text-gray-500">↵</div>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="px-4 py-2 border-t border-gray-700 bg-gray-900/50">
              <div className="flex items-center justify-between text-xs text-gray-500">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <kbd className="px-1.5 py-0.5 bg-gray-800 border border-gray-700 rounded">
                      ↑↓
                    </kbd>
                    Navigate
                  </span>
                  <span className="flex items-center gap-1">
                    <kbd className="px-1.5 py-0.5 bg-gray-800 border border-gray-700 rounded">
                      ↵
                    </kbd>
                    Select
                  </span>
                </div>
                <span>{results.length} results</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
