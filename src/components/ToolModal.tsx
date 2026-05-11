"use client";
import { useState } from "react";
import { X, Copy, Check } from "lucide-react";
import type { Tool } from "../app/data";

interface Props {
  tool: Tool;
  onClose: () => void;
}

export default function ToolModal({ tool, onClose }: Props) {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(tool.code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4 md:p-6"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-[#161b22] border border-[#30363d] rounded-lg w-full max-w-2xl max-h-[85vh] flex flex-col overflow-hidden shadow-2xl">
        {/* Header */}
        <div
          className="flex items-center justify-between px-5 py-4 border-b border-[#21262d] shrink-0"
          style={{
            background: "linear-gradient(135deg, #161b22 0%, #1c2128 100%)",
          }}
        >
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center text-xl shrink-0"
              style={{ background: tool.accent + "22" }}
            >
              {tool.emoji}
            </div>
            <div>
              <p className="text-[17px] font-semibold text-[#f0f6fc] font-mono">
                {tool.name}
              </p>
              <p className="text-[12px] text-[#8b949e]">{tool.desc}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-md bg-transparent border border-[#30363d] text-[#8b949e] hover:bg-[#21262d] hover:text-[#f0f6fc] flex items-center justify-center transition-colors cursor-pointer shrink-0"
          >
            <X size={14} />
          </button>
        </div>

        {/* Body — scrollable */}
        <div className="overflow-y-auto p-5 space-y-5">
          {/* About */}
          <div>
            <p className="text-[12px] font-semibold text-[#3fb950] font-mono mb-2 uppercase tracking-wider">
              About
            </p>
            <p className="text-[13px] text-[#c9d1d9] leading-relaxed">
              {tool.about}
            </p>
          </div>

          {/* Code */}
          <div>
            <p className="text-[12px] font-semibold text-[#3fb950] font-mono mb-2 uppercase tracking-wider">
              Code Example
            </p>
            <div className="bg-[#0d1117] border border-[#30363d] rounded-md overflow-hidden">
              <div className="flex items-center justify-between px-4 py-2 bg-[#21262d] border-b border-[#21262d]">
                <span className="text-[11px] text-[#8b949e] font-mono">
                  {tool.lang}
                </span>
                <button
                  onClick={copy}
                  className="flex items-center gap-1.5 px-2.5 py-1 bg-[#161b22] border border-[#30363d] rounded text-[#8b949e] text-[11px] hover:text-[#f0f6fc] hover:bg-[#21262d] transition-colors cursor-pointer"
                >
                  {copied ? <Check size={11} /> : <Copy size={11} />}
                  {copied ? "Copied!" : "Copy Code"}
                </button>
              </div>
              <pre className="p-4 text-[12px] text-[#c9d1d9] font-mono leading-relaxed overflow-x-auto whitespace-pre">
                <code>{tool.code}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
