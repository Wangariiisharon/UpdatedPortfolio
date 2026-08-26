export type ToolCategory =
  | "all"
  | "frontend"
  | "backend"
  | "database"
  | "tools"
  | "design";

export interface Tool {
  name: string;
  emoji: string;
  cat: Exclude<ToolCategory, "all">;
  accent: string;
  desc: string;
  about: string;
  lang: string;
  code: string;
}

export interface Project {
  name: string;
  visibility: "Public" | "Private";
  desc: string;
  stack: string[];
  updated: string;
  accentColor: string;
  demo?: string;
}

export const tools: Tool[] = [
  {
    name: "React",
    emoji: "⚛️",
    cat: "frontend",
    accent: "#61dafb",
    desc: "Building interactive UIs with hooks and components",
    about:
      "React is my go-to library for building dynamic user interfaces. I leverage hooks for state management and side effects, creating reusable components that make development faster and my code more maintainable.",
    lang: "TypeScript",
    code: `// Custom hook for input handling
import { useState } from 'react';

export const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
  };

  return { values, errors, handleChange, resetForm };
};

// Usage in component
const ContactSection = () => {
  const { values, handleChange } = useForm({
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', values);
  };

  return (
    <div>
      <input
        name="email"
        value={values.email}
        onChange={handleChange}
        placeholder="Your email"
      />
      <textarea
        name="message"
        value={values.message}
        onChange={handleChange}
        placeholder="Your message"
      />
      <button onClick={handleSubmit}>Send</button>
    </div>
  );
};`,
  },
  {
    name: "Next.js",
    emoji: "▲",
    cat: "frontend",
    accent: "#f0f6fc",
    desc: "Server-side rendering and static generation",
    about:
      "Next.js is my framework of choice for production apps. I use it for its powerful SSR, SSG, and ISR capabilities, combined with its excellent developer experience and built-in optimisations like image handling and route-based code splitting.",
    lang: "TypeScript",
    code: `// App Router with typed params + metadata
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPost } from '@/lib/sanity';

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { images: [post.cover] },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();
  return <article>{post.content}</article>;
}`,
  },
  {
    name: "TypeScript",
    emoji: "🔷",
    cat: "frontend",
    accent: "#388bfd",
    desc: "Type-safe JavaScript at every scale",
    about:
      "TypeScript is non-negotiable in my projects. Strong typing catches bugs before runtime, makes refactoring safe, and dramatically improves DX with better autocomplete. Every project I start begins with strict TypeScript.",
    lang: "TypeScript",
    code: `// Generic API response utility types
type ApiResponse<T> =
  | { status: 'success'; data: T }
  | { status: 'error'; error: string; code: number };

async function fetchData<T>(
  url: string,
  options?: RequestInit
): Promise<ApiResponse<T>> {
  try {
    const res = await fetch(url, options);
    if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
    const data = (await res.json()) as T;
    return { status: 'success', data };
  } catch (err) {
    return { status: 'error', error: String(err), code: 500 };
  }
}

// Full type inference at call site
const result = await fetchData<User[]>('/api/users');
if (result.status === 'success') {
  result.data.forEach(u => console.log(u.name));
}`,
  },
  {
    name: "TailwindCSS",
    emoji: "🎨",
    cat: "frontend",
    accent: "#38bdf8",
    desc: "Utility-first CSS for rapid UI development",
    about:
      "Tailwind CSS transformed how I style applications. The utility-first approach means I spend less time naming things and more time building. Paired with Framer Motion, I create polished, responsive interfaces at speed.",
    lang: "TSX",
    code: `// Responsive project card component
const ProjectCard = ({ project }: { project: Project }) => (
  <div className="group relative overflow-hidden rounded-md
    border border-[#30363d] bg-[#161b22] p-4
    transition-all duration-200 hover:border-[#8b949e]
    hover:-translate-y-px cursor-pointer">

    <div
      className="absolute inset-x-0 top-0 h-0.5 opacity-0
        group-hover:opacity-100 transition-opacity"
      style={{ background: project.accent }}
    />

    <div className="flex items-center gap-2 mb-2">
      <BookOpen size={14} className="text-[#8b949e]" />
      <span className="text-[#388bfd] text-xs font-mono font-semibold">
        {project.name}
      </span>
    </div>

    <p className="text-xs text-[#8b949e] leading-relaxed mb-3">
      {project.desc}
    </p>

    <div className="flex flex-wrap gap-1">
      {project.tags.map(tag => (
        <span key={tag}
          className="text-[10px] font-mono px-2 py-0.5 rounded-full
            bg-[#388bfd]/10 text-[#388bfd] border border-[#388bfd]/25">
          {tag}
        </span>
      ))}
    </div>
  </div>
);`,
  },
  {
    name: "Node.js & Express",
    emoji: "🟢",
    cat: "backend",
    accent: "#3fb950",
    desc: "Scalable REST APIs and middleware",
    about:
      "I use Node.js with Express to build robust REST APIs. My focus is on clean architecture, proper error handling, and middleware patterns that keep APIs maintainable and testable at scale.",
    lang: "TypeScript",
    code: `// Express router with typed middleware
import { Router, Request, Response, NextFunction } from 'express';
import { TripService } from '@/services/trip';

const asyncHandler =
  (fn: (req: Request, res: Response, next: NextFunction) => Promise<void>) =>
  (req: Request, res: Response, next: NextFunction) =>
    fn(req, res, next).catch(next);

router.get(
  '/trips/:id',
  asyncHandler(async (req, res) => {
    const trip = await TripService.findById(req.params.id);
    if (!trip) return res.status(404).json({ error: 'Not found' });
    res.json({ data: trip });
  })
);

// Global error boundary
app.use((err: Error, req: Request, res: Response, _next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});`,
  },
  {
    name: "Sanity",
    emoji: "📝",
    cat: "backend",
    accent: "#f03e2f",
    desc: "Headless CMS for structured content",
    about:
      "Sanity is my headless CMS for content-heavy projects. Its flexible schema system and real-time collaboration make it ideal for clients who need to manage content without touching code.",
    lang: "TypeScript",
    code: `// Sanity schema + typed GROQ query
import { defineType, defineField } from 'sanity';

export const postSchema = defineType({
  name: 'post', title: 'Post', type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string',
      validation: r => r.required() }),
    defineField({ name: 'slug', type: 'slug',
      options: { source: 'title' } }),
    defineField({ name: 'publishedAt', type: 'datetime' }),
    defineField({
      name: 'body', type: 'array',
      of: [{ type: 'block' }, { type: 'image',
        options: { hotspot: true } }],
    }),
  ],
});

// Type-safe GROQ with next-sanity
const POSTS_QUERY = groq\`
  *[_type == "post"] | order(publishedAt desc) {
    _id, title, slug, publishedAt,
    "excerpt": array::join(string::split(
      pt::text(body), "")[0..200], "")
  }
\`;`,
  },
  {
    name: "Supabase",
    emoji: "⚡",
    cat: "database",
    accent: "#3ecf8e",
    desc: "Open-source Firebase alternative",
    about:
      "Supabase powers ContextAI's backend — real-time database, auth, and storage in one. Its Postgres foundation with auto-generated REST/GraphQL APIs makes rapid prototyping and production scaling equally smooth.",
    lang: "TypeScript",
    code: `// Supabase realtime + row-level security
import { createClient } from '@supabase/supabase-js';
import type { Database } from '@/types/supabase';

const supabase = createClient<Database>(URL, ANON_KEY);

// Auth with magic link
await supabase.auth.signInWithOtp({ email });

// Realtime subscription with type-safe payload
const channel = supabase
  .channel('documents')
  .on(
    'postgres_changes',
    { event: 'INSERT', schema: 'public', table: 'documents',
      filter: \`user_id=eq.\${userId}\` },
    (payload) => {
      setDocs(prev => [
        ...prev,
        payload.new as Database['public']['Tables']['documents']['Row'],
      ]);
    }
  )
  .subscribe();

return () => supabase.removeChannel(channel);`,
  },
  {
    name: "Firebase",
    emoji: "🔥",
    cat: "database",
    accent: "#fb8c00",
    desc: "Realtime data and authentication",
    about:
      "Firebase powers SongaTrack's real-time fleet tracking. Firestore's live subscriptions are perfect for vehicle position updates, and Firebase Auth handles multi-provider login with minimal setup.",
    lang: "TypeScript",
    code: `// Real-time vehicle tracking with Firestore
import { doc, onSnapshot, updateDoc,
         GeoPoint, serverTimestamp } from 'firebase/firestore';

interface Vehicle {
  id: string;
  location: GeoPoint;
  status: 'active' | 'idle' | 'offline';
  lastSeen: Date;
}

export const trackVehicle = (
  vehicleId: string,
  cb: (v: Vehicle) => void
) => {
  const ref = doc(db, 'vehicles', vehicleId);
  return onSnapshot(ref, snap => {
    if (snap.exists()) cb({ id: snap.id, ...snap.data() } as Vehicle);
  });
};

export const updatePosition = async (id: string, coords: Coords) =>
  updateDoc(doc(db, 'vehicles', id), {
    location: new GeoPoint(coords.lat, coords.lng),
    lastSeen: serverTimestamp(),
    status: 'active',
  });`,
  },
  {
    name: "Resend",
    emoji: "📮",
    cat: "tools",
    accent: "#ec6547",
    desc: "Modern transactional email API",
    about:
      "Resend is my email API of choice. Clean SDK, excellent DX, and reliable delivery. I used it on Norah Digital for contact form submissions — the React Email integration makes crafting beautiful transactional emails a joy.",
    lang: "TypeScript",
    code: `// Transactional email with React Email + Resend
import { Resend } from 'resend';
import { ContactEmail } from '@/emails/ContactEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, message } = body;

  const { error } = await resend.emails.send({
    from: 'hello@norahdigital.com',
    to: 'team@norahdigital.com',
    subject: \`New message from \${name}\`,
    react: <ContactEmail
      name={name}
      email={email}
      message={message}
    />,
  });

  if (error) return Response.json({ error }, { status: 500 });
  return Response.json({ success: true });
}`,
  },
  {
    name: "Git & GitHub",
    emoji: "🐙",
    cat: "tools",
    accent: "#f0f6fc",
    desc: "Version control and collaboration",
    about:
      "Git and GitHub are central to my workflow. I follow conventional commits, use feature branches, and leverage GitHub Actions for CI/CD pipelines. My commit history tells the story of how a project evolves.",
    lang: "Shell",
    code: `#!/bin/bash
# Feature development workflow

git checkout -b feat/auth-refresh-tokens

# Conventional commits
git commit -m "feat(auth): add JWT refresh token rotation"
git commit -m "fix(auth): handle concurrent refresh race condition"
git commit -m "test(auth): add unit tests for token validation"

# Clean history before PR
git rebase -i main --autosquash

# GitHub CLI — create PR with reviewers
gh pr create \\
  --title "feat(auth): JWT refresh token system" \\
  --body "$(cat .github/pull_request_template.md)" \\
  --reviewer "@teammate" \\
  --label "feature,needs-review"

# GitHub Actions CI check
gh run watch`,
  },
  {
    name: "Vercel",
    emoji: "▲",
    cat: "tools",
    accent: "#f0f6fc",
    desc: "Edge deployment for Next.js",
    about:
      "Vercel is my deployment platform for all Next.js projects. Preview deployments on every PR, edge functions, and seamless GitHub integration make it the natural fit for the stack I build with.",
    lang: "JSON",
    code: `// vercel.json — production config
{
  "framework": "nextjs",
  "regions": ["iad1"],
  "buildCommand": "pnpm build",
  "env": {
    "DATABASE_URL": "@database-url",
    "RESEND_API_KEY": "@resend-api-key",
    "NEXT_PUBLIC_APP_URL": "@app-url"
  },
  "headers": [
    {
      "source": "/api/(.*)",
      "headers": [
        { "key": "Cache-Control", "value": "no-store, max-age=0" },
        { "key": "X-Content-Type-Options", "value": "nosniff" }
      ]
    }
  ],
  "rewrites": [
    { "source": "/blog/:slug", "destination": "/posts/:slug" }
  ]
}`,
  },
  {
    name: "Figma",
    emoji: "🖌️",
    cat: "design",
    accent: "#c084fc",
    desc: "UI/UX design and prototyping",
    about:
      "Figma is where every project starts before a single line of code. I use it for wireframes, high-fidelity mockups, and shared component libraries. The design-to-code handoff between Figma and React is seamless.",
    lang: "Notes",
    code: `// Design tokens exported from Figma
// mapped to Tailwind v4 CSS variables

@theme inline {
  /* Brand */
  --color-primary-500: #238636;   /* GitHub green */
  --color-primary-400: #3fb950;

  /* Surfaces */
  --color-surface-100: #161b22;
  --color-surface-200: #21262d;
  --color-surface-300: #30363d;

  /* Typography */
  --color-text-primary:   #f0f6fc;
  --color-text-secondary: #c9d1d9;
  --color-text-muted:     #8b949e;

  /* Fonts */
  --font-sans: 'Mona Sans', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;

  /* Radii */
  --radius-sm: 4px;
  --radius-md: 6px;
  --radius-lg: 8px;
}`,
  },
];

export const projects: Project[] = [
  {
    name: "SongaTrack",
    visibility: "Public",
    desc: "SongaTrack is a fleet and transportation management platform designed to help businesses run logistics more efficiently. It provides end-to-end visibility and operational tools across vehicles, drivers, trips, maintenance and finance so teams can reduce inefficiencies and improve productivity.",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "TailwindCSS",
      "Node.js",
      "Firebase",
      "Daisy UI",
    ],

    updated: "Aug 2025",
    accentColor: "#3fb950",
    demo: "https://app.songatrack.com/auth/sign-in?next=%2Fhome",
  },

  {
    name: "VidMetrics",
    visibility: "Public",
    desc: "VidMetrics is a web app that allows users to analyse their competitors Youtube chanels by giving metrics such as total likes, comments, engagement rate and many more.",
    stack: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "React",
      "Framer Motion",
      "Firbase",
      "Vercel",
      "Youtube API",
    ],
    updated: "March 2026",
    accentColor: "#d29922",
    demo: "https://vid-metrics-nu.vercel.app/",
  },
  {
    name: "Norah Digital",
    visibility: "Public",
    desc: "I built the Norah Digital company website with Next.js for performance, scalability, and SEO. For flexibility, I paired this setup with Sanity CMS and Resend",
    stack: ["Next.js", "TypeScript", "TailwindCSS", "Sanity", "Resend"],
    updated: "2025",
    accentColor: "#d29922",
    demo: "https://www.norahdigital.com/",
  },
  {
    name: "Elevate Wellness",
    visibility: "Public",
    desc: "ElevateWell Kenya offers personalized mobile IV drip therapy services to help individuals rehydrate, recharge, and reclaim energy with doctor-formulated nutrient infusions delivered straight to your door, backed by FAQs and contact information for booking and support.",
    stack: ["Next.js", "TypeScript", "TailwindCSS", "Sanity", "Resend"],
    updated: "2025",
    accentColor: "#d29922",
    demo: "https://www.elevatewellke.com/",
  },
  {
    name: "ContextAI",
    visibility: "Public",
    desc: "ContextAI is a RAG (Retrieval-Augmented Generation) search application that combines the power of AI with real-time data retrieval to provide users with accurate and contextually relevant information. Users upload documents, and the app uses GemniAI to understand the content and answer questions based on that information, making it a powerful tool for knowledge management and information retrieval.",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "TailwindCSS",
      "Node.js",
      "Supabase",
      "GeminiAI",
    ],
    updated: "Mar 2026",
    accentColor: "#388bfd",
    demo: "https://contextai-ivory.vercel.app/",
  },
];

export const techStack = [
  {
    label: "JavaScript",
    color: "text-[#8b949e] border-[#8b949e]/35 bg-[#8b949e]/10",
  },
  {
    label: "TypeScript",
    color: "text-[#8b949e] border-[#8b949e]/35 bg-[#8b949e]/10",
  },
  {
    label: "HTML",
    color: "text-[#8b949e] border-[#8b949e]/35 bg-[#8b949e]/10",
  },

  { label: "CSS", color: "text-[#8b949e] border-[#8b949e]/35 bg-[#8b949e]/10" },
  {
    label: "Resend",
    color: "text-[#8b949e] border-[#8b949e]/35 bg-[#8b949e]/10",
  },
  {
    label: "React",
    color: "text-[#8b949e] border-[#8b949e]/35 bg-[#8b949e]/10",
  },
  {
    label: "Sanity",
    color: "text-[#8b949e] border-[#8b949e]/35 bg-[#8b949e]/10",
  },
  {
    label: "Next.js",
    color: "text-[#8b949e] border-[#8b949e]/35 bg-[#8b949e]/10",
  },
  {
    label: "Node.js",
    color: "text-[#8b949e] border-[#8b949e]/35 bg-[#8b949e]/10",
  },
  {
    label: "Framer Motion",
    color: "text-[#8b949e] border-[#8b949e]/35 bg-[#8b949e]/10",
  },
  {
    label: "Firebase",
    color: "text-[#8b949e] border-[#8b949e]/35 bg-[#8b949e]/10",
  },
  {
    label: "Python",
    color: "text-[#8b949e] border-[#8b949e]/35 bg-[#8b949e]/10",
  },
  { label: "Git", color: "text-[#8b949e] border-[#8b949e]/35 bg-[#8b949e]/10" },
  {
    label: "TailwindCSS",
    color: "text-[#8b949e] border-[#8b949e]/35 bg-[#8b949e]/10",
  },
  {
    label: "Figma",
    color: "text-[#8b949e] border-[#8b949e]/35 bg-[#8b949e]/10",
    dot: "#fb8c00",
  },
  {
    label: "Vercel",
    color: "text-[#8b949e] border-[#8b949e]/35 bg-[#8b949e]/10",
    dot: "#79c0ff",
  },
  {
    label: "Netlify",
    color: "text-[#8b949e] border-[#8b949e]/35 bg-[#8b949e]/10",
  },
];

export const paletteTokens = [
  { name: "gh-bg", hex: "#0d1117", desc: "Page background" },
  { name: "gh-surface", hex: "#161b22", desc: "Card surfaces" },
  { name: "gh-surface2", hex: "#21262d", desc: "Elevated surface" },
  { name: "gh-border", hex: "#30363d", desc: "Default border" },
  { name: "gh-green", hex: "#238636", desc: "Primary action" },
  { name: "gh-green-bright", hex: "#3fb950", desc: "Accent / links" },
  { name: "gh-blue-bright", hex: "#388bfd", desc: "Hyperlinks" },
  { name: "gh-text", hex: "#f0f6fc", desc: "Primary text" },
  { name: "gh-text2", hex: "#c9d1d9", desc: "Body text" },
  { name: "gh-muted", hex: "#8b949e", desc: "Muted / secondary" },
  { name: "gh-orange", hex: "#d29922", desc: "Warning / accent" },
  { name: "gh-purple", hex: "#8957e5", desc: "Special highlight" },
];
