"use client";

import { useState } from "react";

// ── Types ──────────────────────────────────────────────────────────────────────



const PROJECTS = [
  {
    name: "SongaTrack",
    visibility: "Public",
    dot: "#3fcf8e",
    short: "Fleet & transportation management platform with end-to-end logistics visibility.",
    description:
      "SongaTrack is a fleet and transportation management platform designed to help businesses run logistics more efficiently. It provides end-to-end visibility and operational tools across vehicles, drivers, trips, maintenance and finance so teams can reduce inefficiencies and improve productivity.",
    tags: ["Next.js", "React", "TypeScript", "TailwindCSS", "Node.js", "Firebase"],
    lang: "TypeScript",
    updated: "Updated Aug 2025",
    tagColors: {
      "Next.js": "#fff", React: "#61dafb", TypeScript: "#3178c6",
      TailwindCSS: "#06b6d4", "Node.js": "#339933", Firebase: "#ffca28",
    },
  },
  {
    name: "ContextAI",
    visibility: "Public",
    dot: "#60a5fa",
    short: "RAG search app combining AI with real-time data retrieval for document Q&A.",
    description:
      "ContextAI is a RAG (Retrieval-Augmented Generation) search application that combines the power of AI with real-time data retrieval to provide users with accurate and contextually relevant information. Users upload documents, and the app uses GemniAI to understand the content and answer questions based on that information.",
    tags: ["Next.js", "React", "TypeScript", "TailwindCSS", "Node.js", "Supabase", "GemniAI"],
    lang: "TypeScript",
    updated: "Updated Mar 2026",
    tagColors: {
      "Next.js": "#fff", React: "#61dafb", TypeScript: "#3178c6",
      TailwindCSS: "#06b6d4", "Node.js": "#339933", Supabase: "#3ecf8e", GemniAI: "#4285f4",
    },
  },
  {
    name: "Norah Digital",
    visibility: "Public",
    dot: "#fbbf24",
    short: "Company website built with Next.js, Sanity CMS and Resend for email.",
    description:
      "I built the Norah Digital company website with Next.js for performance, scalability, and SEO. For flexibility, I paired this setup with Sanity CMS and Resend for email functionality. Clean architecture with a headless CMS approach for easy content management.",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "Sanity"],
    lang: "TypeScript",
    updated: "Updated 2025",
    tagColors: {
      "Next.js": "#fff", TypeScript: "#3178c6", TailwindCSS: "#06b6d4", Sanity: "#f03e2f",
    },
  },
];














