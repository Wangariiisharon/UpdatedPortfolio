"use client";
import React, { useState, useEffect } from "react";
import socialLinks from "../resources";
import { MapPin, Clock, Copy, Check } from "lucide-react";

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const openPDFInNewTab = () => {
    if (isClient) {
      window.open("/resume.pdf", "_blank");
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("mwangiiisharon@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#0D1117] text-gray-100 border border-gray-800">
      {/* Header */}
      <div className="border-b border-gray-800 bg-[#010409]">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <h1 className="text-3xl font-bold mb-2">Get In Touch</h1>
          <p className="text-gray-400">
            Let&apos;s connect! Feel free to reach out through any of these
            platforms
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Social Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <a
                key={index}
                href={link.url}
                target={link.url.startsWith("http") ? "_blank" : "_self"}
                rel={link.url.startsWith("http") ? "noopener noreferrer" : ""}
                className={`group relative border border-gray-800 rounded-lg bg-[#010409] ${link.hoverColor} transition-all hover:shadow-lg overflow-hidden`}
                onClick={(e) => {
                  if (link.name === "Resume") {
                    e.preventDefault(); // Prevent default link behavior
                    openPDFInNewTab(); // Open the resume in a new tab
                  }
                  if (link.copyable) {
                    e.preventDefault();
                    handleCopyEmail();
                  }
                }}
              >
                <div className={`h-2 bg-gradient-to-r ${link.color}`} />
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`p-3 rounded-lg bg-gradient-to-br ${link.color} bg-opacity-10`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    {link.copyable && (
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          handleCopyEmail();
                        }}
                        className="p-2 hover:bg-gray-800 rounded transition-colors"
                      >
                        {copiedEmail ? (
                          <Check className="w-4 h-4 text-green-400" />
                        ) : (
                          <Copy className="w-4 h-4 text-gray-400" />
                        )}
                      </button>
                    )}
                  </div>

                  <h3 className="text-xl font-bold mb-2 group-hover:text-orange-400 transition-colors">
                    {link.name}
                  </h3>

                  <p className="text-gray-400 text-sm mb-3 font-mono">
                    {link.handle}
                  </p>

                  <p className="text-gray-500 text-sm mb-3">
                    {link.description}
                  </p>

                  <div className="flex items-center justify-between pt-3 border-t border-gray-800">
                    <span className="text-xs text-gray-600">{link.stats}</span>
                    <span className="text-xs text-gray-600 group-hover:text-orange-400 transition-colors">
                      {link.copyable ? "Click to copy →" : "Visit →"}
                    </span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
