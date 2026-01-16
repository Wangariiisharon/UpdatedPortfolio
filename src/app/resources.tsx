import { Github, Linkedin, Mail, FileText } from "lucide-react";

export const projects = [
  {
    id: 1,
    name: "SongaTrack",
    description:
      "SongaTrack is a fleet and transportation management platform designed to help businesses run logistics more efficiently. It provides end‑to‑end visibility and operational tools across vehicles, drivers, trips, maintenance and finance so teams can reduce inefficiencies and improve productivity.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "TailwindCss",
      "Node.js",
      "Firebase",
    ],
    category: "web",
    github: "#",
    link: "https://app.songatrack.com/auth/sign-in?next=%2Fhome",
    date: "2025-08",
  },
  {
    id: 2,
    name: "Norah Digital Website",
    description:
      "I built the Norah Digital company website with Next.js for performance, scalability, and SEO. For flexibility, I paired this setup with Sanity CMS and Resend",
    tech: [
      "React",
      "Next.js",
      "Sanity",
      "Framer Motion",
      "TailwindCss",
      "Vercel",
      "TypeScript",
      "Resend",
    ],
    category: "web",
    github: "#",
    link: "https://www.norahdigital.com/",
    date: "2025-10",
  },
  {
    id: 3,
    name: "Elevate Wellness",
    description:
      "ElevateWell Kenya offers personalized mobile IV drip therapy services to help individuals rehydrate, recharge, and reclaim energy with doctor-formulated nutrient infusions delivered straight to your door, backed by FAQs and contact information for booking and support.",
    tech: [
      "React",
      "Next.js",
      "Sanity",
      "TailwindCss",
      "Vercel",
      "TypeScript",
      "Resend",
    ],
    category: "web",
    link: "https://www.elevatewellke.com/",
    github: "#",
    date: "2025-11",
  },
  {
    id: 4,
    name: "Riverland",
    description:
      "Riverland is a modern, lifestyle-centered shopping destination designed to bring together retail, dining, and entertainment under one vibrant roof. The upcoming mall aims to create an engaging community hub where visitors can shop top brands, enjoy diverse culinary experiences, and connect in stylish, comfortable spaces.",
    tech: [
      "React",
      "Next.js",
      "Sanity",
      "TailwindCss",
      "Vercel",
      "TypeScript",
      "Resend",
    ],
    category: "web",
    link: "https://riverland-mall.vercel.app",
    github: "#",
    date: "2024-08",
  },
  {
    id: 5,
    name: "Summerix",
    description:
      "Modern and scalable SaaS Starter Kit designed to jumpstart your product development. This boilerplate comes with certain important features out of the box so that users don't have to write the boilerplate code, instead, they can focus on building the core features!",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "TailwindCss",
      "Node.js",
      "Vercel",
      "Firebase",
    ],
    category: "web",
    link: "https://summerix.vercel.app/",
    github: "#",
    date: "2024-07",
  },
];

//social links data

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    handle: "@Emanuele-Sgroi",
    url: "https://github.com/Emanuele-Sgroi",
    color: "from-gray-700 to-gray-900",
    hoverColor: "hover:border-gray-600",
    description: "Check out my code, projects, and contributions",
    stats: "50+ repositories",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    handle: "in/emanuele-sgroi",
    url: "https://linkedin.com/in/emanuele-sgroi",
    color: "from-blue-600 to-blue-800",
    hoverColor: "hover:border-blue-600",
    description: "Connect with me professionally",
    stats: "Full-stack Developer",
  },
  {
    name: "Email",
    icon: Mail,
    handle: "em.sgroi@gmail.com",
    url: "mailto:em.sgroi@gmail.com",
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
    name: "React",
    category: "frontend",
    icon: "⚛️",
    color: "from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600",
    tagline: "Building interactive UIs with hooks and components",
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
    name: "Tailwind CSS",
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
    projects: ["Portfolio CMS", "Wedding Website"],
  },
  {
    name: "Resend",
    category: "backend",
    icon: "📧",
    color: "from-purple-500 to-pink-500",
    tagline: "Modern email API for developers",
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
    name: "Figma",
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
    projects: ["Hazeltree Lodge B&B", "Wedding Website"],
  },
  {
    name: "Git & GitHub",
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
];
