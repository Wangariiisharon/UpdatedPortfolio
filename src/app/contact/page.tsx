"use client";
import React, { useState } from "react";
import socialLinks from "../resources";
import { MapPin, Clock, Copy, Check } from "lucide-react";

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("mwangiiisharon@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="min-h-screen  bg-[#0D1117] text-gray-100 border border-gray-800 ">
      {/* Header */}
      <div className="border-b border-gray-800 bg-[#010409] ">
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
        {/* Availability Banner */}
        <div className="mb-12 bg-gradient-to-r from-green-900/30 to-emerald-900/30 border border-green-800/50 rounded-lg p-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse mt-1"></div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-green-400 mb-1">
                Available for Opportunities
              </h3>
              <p className="text-gray-300 mb-3">
                I&apos;m currently open to new full-stack development roles,
                Front-end roles, freelance projects, and collaborations.
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-green-400" />
                  <span>Nairobi, Kenya (Remote Available)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-green-400" />
                  <span>EAT (UTC+3)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

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

        {/* Additional Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* What I'm Looking For */}
          <div className="border border-gray-800 rounded-lg] bg-[#010409] p-6">
            <h3 className="text-xl font-bold mb-4 text-orange-400">
              What I&apos;m Looking For
            </h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-3">
                <span className="text-orange-500 mt-1">▸</span>
                <span>
                  Full-stack development roles with modern tech stacks
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 mt-1">▸</span>
                <span>
                  Exciting projects involving React, Next.js, or Node.js
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 mt-1">▸</span>
                <span>Opportunities to work on impactful products</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 mt-1">▸</span>
                <span>Remote-friendly teams with collaborative culture</span>
              </li>
            </ul>
          </div>

          {/* Response Time */}
          <div className="border border-gray-800 rounded-lg bg-[#010409] p-6">
            <h3 className="text-xl font-bold mb-4 text-orange-400">
              Response Time
            </h3>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-300">Email</span>
                  <span className="text-sm text-green-400">24 hours</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div
                    className="bg-green-500 h-2 rounded-full"
                    style={{ width: "95%" }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-300">LinkedIn</span>
                  <span className="text-sm text-yellow-400">1-2 days</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div
                    className="bg-yellow-500 h-2 rounded-full"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-300">Twitter DM</span>
                  <span className="text-sm text-orange-400">2-3 days</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div
                    className="bg-orange-500 h-2 rounded-full"
                    style={{ width: "60%" }}
                  ></div>
                </div>
              </div>

              <p className="text-sm text-gray-500 pt-2">
                For urgent matters, email is your best bet!
              </p>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="mt-12 text-center border border-gray-800 rounded-lg bg-[#010409] p-8">
          <h3 className="text-2xl font-bold mb-3">
            Let&apos;s Build Something Great Together
          </h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Whether you have a project in mind, want to collaborate, or just
            want to chat about tech, I&apos;m always happy to connect with
            fellow developers and tech enthusiasts.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="mailto:mwangiiisharon@gmail.com"
              className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors"
            >
              Send an Email
            </a>
            <a
              href="https://github.com/Wangariiisharon"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-lg transition-colors border border-gray-700"
            >
              View GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
