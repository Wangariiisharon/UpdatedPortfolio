"use client";
import React, { useState } from "react";
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

export default function DevTools() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedTech, setSelectedTech] = useState<
    (typeof technologies)[number] | null
  >(null);
  const [copied, setCopied] = useState(false);

  const categories = [
    { id: "all", label: "All Technologies", icon: Code2 },
    { id: "frontend", label: "Frontend", icon: Code2 },
    { id: "backend", label: "Backend", icon: Server },
    { id: "database", label: "Database", icon: Database },
    { id: "mobile", label: "Mobile", icon: Smartphone },
    { id: "tools", label: "Tools", icon: Wrench },
    { id: "design", label: "Design", icon: Palette },
  ];

  const technologies = [
    {
      name: "React",
      category: "frontend",
      icon: "⚛️",
      color: "from-blue-500 to-cyan-500",
      tagline: "Building interactive UIs with hooks and components",
      experience: "2+ years",
      level: "Advanced",
      description:
        "React is my go-to library for building dynamic user interfaces. I leverage hooks for state management and side effects, creating reusable components that make development faster and code more maintainable.",
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
      projects: ["Wedding Website", "E-Commerce Platform", "Weather Dashboard"],
    },
    {
      name: "Next.js",
      category: "frontend",
      icon: "▲",
      color: "from-gray-700 to-gray-900",
      tagline: "Server-side rendering and static generation",
      experience: "1.5+ years",
      level: "Advanced",
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
      projects: ["Hazeltree Lodge B&B", "Portfolio CMS"],
    },
    {
      name: "Node.js & Express",
      category: "backend",
      icon: "🟢",
      color: "from-green-500 to-green-700",
      tagline: "Building scalable REST APIs and middleware",
      experience: "2+ years",
      level: "Advanced",
      description:
        "Node.js allows me to use JavaScript across the entire stack. I build RESTful APIs with Express, handling authentication, validation, and database operations efficiently.",
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
      projects: ["Wedding Website", "E-Commerce Platform"],
    },
    {
      name: "MongoDB & Mongoose",
      category: "database",
      icon: "🍃",
      color: "from-green-600 to-green-800",
      tagline: "NoSQL database with flexible schemas",
      experience: "1+ year",
      level: "Intermediate",
      description:
        "MongoDB's flexibility is perfect for projects with evolving data structures. I use Mongoose for schema validation and building relationships between documents.",
      codeSnippet: `// Mongoose schema with validation
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    match: [/^\\S+@\\S+\\.\\S+$/, 'Invalid email']
  },
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
    maxlength: 50
  },
  rsvpStatus: {
    type: String,
    enum: ['pending', 'attending', 'declined'],
    default: 'pending'
  },
  guests: [{
    name: String,
    dietary: String
  }],
  songRequests: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Song'
  }]
}, { timestamps: true });

// Virtual for total guest count
userSchema.virtual('totalGuests').get(function() {
  return this.guests.length + 1;
});

export const User = mongoose.model('User', userSchema);`,
      projects: ["Wedding Website", "Task Management App"],
    },
    {
      name: "Tailwind CSS",
      category: "frontend",
      icon: "🎨",
      color: "from-cyan-400 to-blue-500",
      tagline: "Utility-first CSS for rapid UI development",
      experience: "2+ years",
      level: "Advanced",
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
      projects: ["Portfolio CMS", "Wedding Website"],
    },
    {
      name: "Resend",
      category: "backend",
      icon: "📧",
      color: "from-purple-500 to-pink-500",
      tagline: "Modern email API for developers",
      experience: "6+ months",
      level: "Intermediate",
      description:
        "Resend makes sending transactional emails simple and reliable. I use it for contact submissions, RSVP confirmations, and notification systems.",
      codeSnippet: `// Email service with Resend
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export class EmailService {
  static async sendRSVPConfirmation(userEmail, userData) {
    try {
      const { data, error } = await resend.emails.send({
        from: 'Wedding <rsvp@ourwedding.com>',
        to: userEmail,
        subject: 'RSVP Confirmation - Our Special Day!',
        html: \`
          <div style="font-family: Arial, sans-serif;">
            <h1>Thank you, \${userData.name}!</h1>
            <p>We've received your RSVP.</p>
            <div style="background: #f3f4f6; padding: 20px;">
              <h3>Your Details:</h3>
              <p><strong>Status:</strong> \${userData.rsvpStatus}</p>
              <p><strong>Guests:</strong> \${userData.totalGuests}</p>
            </div>
            <p>See you on the big day! 💕</p>
          </div>
        \`
      });

      if (error) throw error;
      return { success: true, data };
    } catch (error) {
      console.error('Email failed:', error);
      return { success: false, error: error.message };
    }
  }
}`,
      projects: ["Wedding Website", "Hazeltree Lodge B&B"],
    },
    {
      name: "React Native",
      category: "mobile",
      icon: "📱",
      color: "from-blue-400 to-purple-500",
      tagline: "Cross-platform mobile development",
      experience: "1+ year",
      level: "Intermediate",
      description:
        "React Native lets me build mobile apps using my React knowledge. I can create iOS and Android apps from a single codebase.",
      codeSnippet: `// Custom hook for offline data sync
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NetInfo from '@react-native-community/netinfo';

export const useOfflineSync = (key, fetchFn) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsOnline(state.isConnected);
    });
    return () => unsubscribe();
  }, []);

  const loadData = async () => {
    try {
      // Load cached data first
      const cached = await AsyncStorage.getItem(key);
      if (cached) setData(JSON.parse(cached));

      // Fetch fresh data if online
      if (isOnline) {
        const fresh = await fetchFn();
        setData(fresh);
        await AsyncStorage.setItem(key, JSON.stringify(fresh));
      }
    } catch (error) {
      console.error('Sync error:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { loadData(); }, [isOnline]);

  return { data, loading, isOnline, refresh: loadData };
};`,
      projects: ["Task Management App"],
    },
    {
      name: "Prisma",
      category: "database",
      icon: "🔷",
      color: "from-indigo-500 to-purple-600",
      tagline: "Type-safe database ORM",
      experience: "6+ months",
      level: "Intermediate",
      description:
        "Prisma provides type-safety for database operations. The auto-generated client and migrations make database management smooth and reliable.",
      codeSnippet: `// Prisma schema definition
// schema.prisma
model User {
  id        String   @id @default(cuid())
  email     String   @unique
  name      String
  posts     Post[]
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model Post {
  id        String   @id @default(cuid())
  title     String
  content   String?
  published Boolean  @default(false)
  author    User     @relation(fields: [authorId], references: [id])
  authorId  String
  tags      Tag[]
  createdAt DateTime @default(now())
}

model Tag {
  id    String @id @default(cuid())
  name  String @unique
  posts Post[]
}

// Type-safe query with relations
const postsWithAuthors = await prisma.post.findMany({
  where: { published: true },
  include: {
    author: { select: { name: true, email: true } },
    tags: true
  },
  orderBy: { createdAt: 'desc' },
  take: 10
});`,
      projects: ["Portfolio CMS"],
    },
    {
      name: "Figma",
      category: "design",
      icon: "🎨",
      color: "from-red-400 to-purple-500",
      tagline: "UI/UX design and prototyping",
      experience: "1+ year",
      level: "Intermediate",
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
      projects: ["Hazeltree Lodge B&B", "Wedding Website"],
    },
    {
      name: "Git & GitHub",
      category: "tools",
      icon: "🔀",
      color: "from-gray-700 to-gray-900",
      tagline: "Version control and collaboration",
      experience: "2+ years",
      level: "Advanced",
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
              onClick={() => setSelectedTech(tech)}
              className="group cursor-pointer border border-gray-800 rounded-lg bg-[#010409] hover:border-orange-500 transition-all hover:shadow-lg hover:shadow-orange-500/20 overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${tech.color}`} />
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="text-4xl">{tech.icon}</div>
                  <span className="px-2 py-1 bg-gray-800 text-gray-400 rounded text-xs">
                    {tech.experience}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-orange-400 transition-colors">
                  {tech.name}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{tech.tagline}</p>
                <div className="flex items-center justify-between text-xs">
                  <span
                    className={`px-2 py-1 rounded ${
                      tech.level === "Advanced"
                        ? "bg-green-600"
                        : tech.level === "Intermediate"
                          ? "bg-yellow-600"
                          : "bg-blue-600"
                    }`}
                  >
                    {tech.level}
                  </span>
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
