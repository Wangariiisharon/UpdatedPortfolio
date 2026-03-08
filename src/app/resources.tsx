import { Github, Linkedin, Mail, FileText } from "lucide-react";

export const projects = [
  {
    id: 1,
    name: "SongaTrack",
    description:
      "SongaTrack is a fleet and transportation management platform designed to help businesses run logistics more efficiently. It provides end-to-end visibility and operational tools across vehicles, drivers, trips, maintenance and finance so teams can reduce inefficiencies and improve productivity.",
    isPublic: true,
    updated: "Aug 2025",
    topics: [
      "Next.js",
      "React",
      "TypeScript",
      "TailwindCSS",
      "Node.js",
      "Firebase",
    ],
    link: "https://app.songatrack.com/auth/sign-in?next=%2Fhome",
  },
  {
    id: 2,
    name: "ContextAI",
    description:
      "ContextAI is a RAG (Retrieval-Augmented Generation) search application that combines the power of AI with real-time data retrieval to provide users with accurate and contextually relevant information. Users upload documents, and the app uses GemniAI to understand the content and answer questions based on that information, making it a powerful tool for knowledge management and information retrieval.",
    isPublic: true,
    updated: "Mar 2026",
    topics: [
      "Next.js",
      "React",
      "TypeScript",
      "TailwindCSS",
      "Node.js",
      "Supabase",
      "GemniAI",
    ],
    link: "https://contextai-ivory.vercel.app/",
  },
  {
    id: 3,
    name: "Norah Digital",
    description:
      "I built the Norah Digital company website with Next.js for performance, scalability, and SEO. For flexibility, I paired this setup with Sanity CMS and Resend",
    isPublic: true,
    updated: "Nov 2025",
    topics: [
      "React",
      "Next.js",
      "Sanity",
      "Resend",
      "Vercel",
      "TailwindCSS",
      "TypeScript",
      "Resend",
    ],
    link: "https://www.norahdigital.com/",
  },
  {
    id: 4,
    name: "Elevate Wellness",
    description:
      "ElevateWell Kenya offers personalized mobile IV drip therapy services to help individuals rehydrate, recharge, and reclaim energy with doctor-formulated nutrient infusions delivered straight to your door, backed by FAQs and contact information for booking and support.",
    isPublic: true,
    updated: "Dec 2025",
    topics: [
      "React",
      "Next.js",
      "Sanity",
      "TailwindCSS",
      "Vercel",
      "TypeScript",
      "Resend",
    ],
    link: "https://www.elevatewellke.com/",
  },
  {
    id: 5,
    name: "LaunchKit",
    description:
      "Its a SaaS Starter Kit designed to jumpstart product development. It comes with certain features so that users don't have to write the boilerplate code, instead you could focus on building the core feature! It includes user authentication, role-based access control, a permission system, and a customizable dashboard. The kit is built with Next.js, Tailwind CSS, TypeScript, and Firbase.",
    isPublic: false,
    updated: "Feb 2025",
    topics: [
      "Next.js",
      "React",
      "TailwindCSS",
      "Framer Motion",
      "Vercel, Firbase",
    ],
    link: "https://ecommerce-store-ivory.vercel.app",
  },
  {
    id: 6,
    name: "Riverland",
    description:
      "Riverland is a modern, lifestyle-centered shopping destination designed to bring together retail, dining, and entertainment under one vibrant roof. The upcoming mall aims to create an engaging community hub where visitors can shop top brands, enjoy diverse culinary experiences, and connect in stylish, comfortable spaces.",
    isPublic: false,
    updated: "Jan 2026",
    topics: ["React", "Next.js", "Sanity", "TailwindCSS", "Vercel"],
    link: "https://summerix.vercel.app/auth/sign-in",
  },
  {
    id: 7,
    name: "Portfolio Website",
    description:
      "A GitHub-inspired portfolio website showcasing my projects, skills, and experience as a full-stack developer.",
    isPublic: true,
    updated: "Jan 2026",
    topics: ["Next.js", "TypeScript", "TailwindCSS", "React"],
  },
];
// Technologies data
export const technologiesColor = [
  { name: "JavaScript", color: "#eab308" },
  { name: "TypeScript", color: "#2563eb" },
  { name: "HTML", color: "#ea580c" },
  { name: "CSS", color: "#3b82f6" },
  { name: "Resend", color: "#ec4899" },
  { name: "React", color: "#06b6d4" },
  { name: "Sanity", color: "#7c3aed" },
  { name: "Next.js", color: "#4b5563" },
  { name: "Node.js", color: "#16a34a" },
  { name: "Framer Motion", color: "#dc2626" },
  { name: "NPM", color: "#ef4444" },
  { name: "Firebase", color: "#f97316" },
  { name: "Python", color: "#3b82f6" },
  { name: "Git", color: "#c2410c" },
  { name: "TailwindCSS", color: "#0891b2" },
  { name: "Figma", color: "#7c3aed" },
  { name: "Vercel", color: "#2563eb" },
  { name: "Netlify", color: "#ec4899" },
];

//social links data

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    handle: "@Wangariiisharon",
    url: "https://github.com/Wangariiisharon",
    color: "from-gray-700 to-gray-900",
    hoverColor: "hover:border-gray-600",
    description: "Check out my code, projects, and contributions",
    stats: "50+ repositories",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    handle: "in/sharon-mwangi-656a17233",
    url: "https://www.linkedin.com/in/sharon-mwangi-656a17233/",
    color: "from-blue-600 to-blue-800",
    hoverColor: "hover:border-blue-600",
    description: "Connect with me professionally",
    stats: "Full-stack Developer",
  },
  {
    name: "Email",
    icon: Mail,
    handle: "mwangiiisharon@gmail.com",
    url: "mailto:mwangiiisharon@gmail.com",
    color: "from-orange-500 to-red-600",
    hoverColor: "hover:border-orange-500",
    description: "Send me a message anytime",
    stats: "Response within 24h",
    copyable: true,
  },
  {
    name: "Resume",
    icon: FileText,
    handle: "Download CV",
    url: "#",
    color: "from-purple-600 to-purple-800",
    hoverColor: "hover:border-purple-600",
    description: "View my complete professional background",
    stats: "PDF format",
  },
];
export default socialLinks;

//Dev Tools
export const technologies = [
  {
    id: 1,
    name: "React",
    category: "frontend",
    icon: "⚛️",
    color: "from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600",
    tagline: "Building interactive UIs with hooks and components",
    description:
      "React is my go-to library for building dynamic user interfaces. I leverage hooks for state management and side effects, creating reusable components that make development faster and my code more maintainable.",
    codeSnippet: `// Custom hook for input handling
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
    projects: ["All Projects"],
  },
  {
    name: "Next.js",
    id: 2,
    category: "frontend",
    icon: "▲",
    color: "from-gray-700 to-gray-900",
    tagline: "Server-side rendering and static generation",
    description:
      "Next.js brings the power of server-side rendering to React. I use it for SEO-critical projects where performance and initial load time matter. The API routes feature is perfect for building full-stack applications.",
    codeSnippet: `// API route for contact submissions
// pages/api/contact.js
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, message } = req.body;

    const data = await resend.emails.send({
      from: 'contact@mydomain.com',
      to: 'hello@mydomain.com',
      subject: \`New message from \${name}\`,
      html: \`
        <h2>New Contact Submission</h2>
        <p><strong>From:</strong> \${name} (\${email})</p>
        <p><strong>Message:</strong></p>
        <p>\${message}</p>
      \`
    });

    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}`,
    projects: ["All Projects"],
  },
  {
    name: "Node.js & Express",
    id: 3,
    category: "backend",
    icon: "🟢",
    color: "from-green-500 to-green-700",
    tagline: "Building scalable REST APIs and middleware",
    description:
      "Node.js allows me to use JavaScript across the entire stack. I handle authentication, validation, and database operations efficiently.",
    codeSnippet: `// Express middleware for authentication
import jwt from 'jsonwebtoken';

export const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ 
      error: 'Access token required' 
    });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ 
        error: 'Invalid or expired token' 
      });
    }
    req.user = user;
    next();
  });
};

// Protected route example
app.get('/api/user/profile', 
  authenticateToken, 
  async (req, res) => {
    const user = await User.findById(req.user.id);
    res.json(user);
  }
);`,
    projects: ["Summerix", "SongaTrack"],
  },

  {
    name: "Tailwind CSS",
    id: 4,
    category: "frontend",
    icon: "🎨",
    color: "from-cyan-400 to-blue-500",
    tagline: "Utility-first CSS for rapid UI development",
    description:
      "Tailwind speeds up my development with utility classes. I can build responsive, consistent designs without context switching between files.",
    codeSnippet: `// Reusable button component with Tailwind
export const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  onClick
}) => {
  const baseStyles = 'rounded font-semibold transition-all';
  
  const variants = {
    primary: 'bg-orange-500 hover:bg-orange-600 text-white',
    secondary: 'bg-gray-800 hover:bg-gray-700 text-white',
    outline: 'border-2 border-orange-500 text-orange-500'
  };
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };

  return (
    <button
      onClick={onClick}
      className={\`\${baseStyles} \${variants[variant]} \${sizes[size]}\`}
    >
      {children}
    </button>
  );
};

// Usage with responsive grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <Button variant="primary" size="lg">
    Get Started
  </Button>
</div>`,
    projects: ["All Projects"],
  },
  {
    name: "Resend",
    id: 5,
    category: "backend",
    icon: "📧",
    color: "from-purple-500 to-pink-500",
    tagline: "Modern email API for developers",
    description:
      "Resend makes sending transactional emails simple and reliable. I use it for contact submissions, RSVP confirmations, and notification systems.",
    codeSnippet: `// Email service with Resend

import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { customerData, selectedSlot, selectedServices, message } = body;

    await resend.emails.send({
      from: "Booking Inquiry <inquiry@elevatewellke.com>", // this can be replaced with a verified domain later
      to: "hello@elevatewellke.com", // the receiving email
      subject: 'New Message from \${customerData.fullName}',
        html: \`
        <p><strong> Name:</strong> \${customerData.fullName}</p>
        <p><strong> Email:</strong> \${customerData.email}</p>
        <p><strong>Phone Number:</strong> \${customerData.phone}</p>
        <p><strong>Selected Services:</strong> \${selectedServices}</p>
        <p><strong>Selected Timeslots:</strong> \${selectedSlot}</p>
        <p><strong>Message:</strong> \${message}</p>
              \`
,
    });

    // resend.contacts.create({
    //   email: customerData.email,
    //   firstName: customerData.fullName,
    //   unsubscribed: true,
    // });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
`,
    projects: ["Norah Digital", "Elevate Wellness", "Riverland"],
  },

  {
    name: "Figma",
    id: 6,
    category: "design",
    icon: "🎨",
    color: "from-red-400 to-purple-500",
    tagline: "UI/UX design and prototyping",
    description:
      "Figma helps me design interfaces before coding. I create wireframes, high-fidelity mockups, and interactive prototypes to validate ideas with clients.",
    codeSnippet: `// Design System exported from Figma

// colors.js - Synced from Figma design tokens
export const colors = {
  primary: {
    50: '#fef2f2',
    500: '#ef4444',
    600: '#dc2626',
    900: '#7f1d1d'
  },
  neutral: {
    50: '#fafafa',
    800: '#262626',
    900: '#171717'
  }
};

// Typography system from Figma
export const typography = {
  h1: {
    fontSize: '48px',
    fontWeight: 700,
    lineHeight: 1.2,
    letterSpacing: '-0.02em'
  },
  body: {
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: 1.5
  }
};

// Component matching Figma design specs
const Card = ({ children }) => (
  <div style={{
    background: colors.neutral[50],
    borderRadius: '12px',
    padding: '24px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
  }}>
    {children}
  </div>
);`,
    projects: ["All Projects"],
  },
  {
    name: "Git & GitHub",
    id: 7,
    category: "tools",
    icon: "🔀",
    color: "from-gray-700 to-gray-900",
    tagline: "Version control and collaboration",
    description:
      "Git is essential for managing code changes and collaborating with others. I use branching strategies, pull requests, and GitHub Actions for CI/CD.",
    codeSnippet: `# Git workflow for feature development

# Create feature branch from main
git checkout -b feature/add-rsvp-system

# Make changes and commit with descriptive message
git add .
git commit -m "feat: implement RSVP system with email

- Add RSVP component
- Integrate Resend for confirmations
- Add MongoDB schema for guests
- Implement validation"

# Keep branch updated with main
git checkout main
git pull origin main
git checkout feature/add-rsvp-system
git rebase main

# Push and create pull request
git push origin feature/add-rsvp-system

# After review, merge to main
git checkout main
git merge feature/add-rsvp-system
git push origin main

# Clean up feature branch
git branch -d feature/add-rsvp-system

# GitHub Actions workflow
# .github/workflows/deploy.yml
name: Deploy
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy to Vercel
        run: vercel --prod`,
    projects: ["All Projects"],
  },
  {
    name: "Sanity",
    id: 8,
    category: "tools",
    icon: "🔀",
    color: "from-gray-700 to-gray-900",
    tagline: "Version control and collaboration",
    description:
      "Create and manage structured content that can be reused across any digital channels. I use Sanity to build flexible CMS solutions that empower content creators while providing developers with a robust API and customizable editing environment.",
    codeSnippet: `# Sanity schema for services document

import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const serviceType = defineType({
  name: "service",
  title: "Services",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
    }),
    defineField({
      name: "mainImage",
      type: "image",
      options: {
        hotspot: true,
        metadata: ["blurhash", "lqip", "palette"], // <-- updated to valid metadata types
      },
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alternative text",
        }),
      ],
    }),

    defineField({
      name: "publishedAt",
      type: "datetime",
    }),
    defineField({
      name: "description",
      type: "blockContent",
    }),
    defineField({
      name: "price",
      type: "number",
    }),
    defineField({
      name: "tagline",
      type: "string",
    }),
    defineField({
      name: "serviceSummary",
      type: "string",
      validation: (Rule) =>
        Rule.required().custom((text) => {
          if (!text) return true; // required rule will handle empty case
          const wordCount = text.trim().split(/\s+/).length;
          // if (wordCount < 10)
          //   return "Service summary must have at least 10 words.";
          if (wordCount > 15)
            return "Service summary must have at most 15 words.";
          return true;
        }),
    }),
  ],
  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return { ...selection, subtitle: author && by \${author} };
    },
  },
}); 


# Usage in Next.js to fetch services

import { client } from "@/sanity/lib/client";
import { Service } from "../../app/resources";
export const revalidate = 60;

export async function getServices() {
  return client.fetch(\`
    *[_type == "service"]
      | order(publishedAt desc){
        title,
        "slug": slug.current,
        mainImage {
          asset->{
            _id,
            url,
            alt
          }
        },
        publishedAt,
        amount,
        tagline,
        serviceSummary,
        "description": pt::text(description)
      }
  \`);
}

`,
    projects: ["All Projects"],
  },
  {
    name: "Vercel",
    id: 9,
    category: "tools",
    icon: "▲",
    color: "from-gray-700 to-gray-900",
    tagline: "Deployment and hosting platform",
    description:
      "Vercel provides seamless deployment for Next.js applications. I use it for its easy integration with GitHub for continuous deployment.",
    codeSnippet: `# Vercel configuration for Next.js project

# vercel.json
{
  "version": 2,
  "builds": [
    {
      "src": "next.config.js",
      "use": "@vercel/next"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/$1"
    }
  ]
}

# Environment variables setup
# In Vercel dashboard, set the following:
# NEXT_PUBLIC_API_URL=https://api.mydomain.com
# RESEND_API_KEY=your_resend_api_key_here
`,
    projects: ["All Projects"],
  },
  {
    name: "Firebase",
    id: 10,
    category: "tools",
    icon: "🟢",
    color: "from-gray-700 to-gray-900",
    tagline: "Backend-as-a-Service platform",
    description:
      "Firebase offers a suite of tools for building web and mobile applications. I use its real-time database, authentication, and hosting services to accelerate development and scale applications effortlessly.",
    codeSnippet: `# Firebase configuration for Next.js project
// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
`,
    projects: ["Summerix", "Songatrack"],
  },
];

export type FocusedItem = {
  type: "project" | "technology";
  id: number;
};
