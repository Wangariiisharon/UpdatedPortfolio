import React from "react";

export default function Profile() {
  const technologies = [
    { name: "JavaScript", color: "bg-yellow-500" },
    { name: "TypeScript", color: "bg-blue-600" },
    { name: "HTML", color: "bg-orange-600" },
    { name: "CSS", color: "bg-blue-500" },
    { name: "Resend", color: "bg-pink-500" },
    { name: "React", color: "bg-cyan-500" },
    { name: "Sanity", color: "bg-purple-600" },
    { name: "Next.js", color: "bg-gray-600" },
    { name: "Node.js", color: "bg-green-600" },
    { name: "Framer Motion", color: "bg-red-600" },
    { name: "NPM", color: "bg-red-500" },
    { name: "Firebase", color: "bg-orange-500" },
    { name: "Python", color: "bg-blue-500" },
    { name: "Git", color: "bg-orange-700" },
    { name: "Tailwind", color: "bg-cyan-600" },
    { name: "Figma", color: "bg-purple-600" },
    { name: "Vercel", color: "bg-blue-600" },
    { name: "Netlify", color: "bg-pink-500" },
  ];
  return (
    <div className="space-y-6  border border-gray-800 p-8 min-h-screen">
      <div className="text-sm text-gray-400 mb-4">
        Sharon-Mwangi / README.md
      </div>

      <h1 className="text-4xl font-bold text-white mb-6 border-b border-gray-800 p-4">
        Hi 👋, I&apos;m Sharon Mwangi
      </h1>

      <p className="text-gray-300 text-lg leading-relaxed mb-6">
        I&apos;m on a journey to becoming a full-stack developer, building on my
        background in Information Technology and hands-on experience in web and
        mobile development 💻. I enjoy turning ideas into code and code into
        solutions, and I&apos;m always trying to learn more about software
        engineering and architecture 💡. At the end of the day, I&apos;m just a
        guy working towards a goal, driven by creativity and a love for
        technology. 🚀🔧
      </p>

      <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md font-medium transition-colors">
        Get in Touch
      </button>

      <div className="mt-8">
        <h2 className="text-2xl font-bold text-white mb-6">
          Technologies I&apos;ve Worked With:
        </h2>

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech.name}
              className={`${tech.color} text-white px-3 py-1.5 rounded text-sm font-medium`}
            >
              {tech.name}
            </span>
          ))}
        </div>
      </div>

      <p className="text-gray-400 text-sm mt-8">
        This website is inspired by the design of GitHub.
      </p>

      <div className="mt-8">
        <h3 className="text-xl font-bold text-white mb-4">Crafts</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-gray-700 rounded-lg p-4">
            <h4 className="text-blue-400 font-medium mb-2">
              🏨 Hazeltree Lodge B&B{" "}
              <span className="text-gray-500 text-sm">Public</span>
            </h4>
            <p className="text-gray-400 text-sm">
              A full-featured Next.js site for a bed-and-breakfast in Ireland,
              offering information and booking capabilities
            </p>
          </div>
          <div className=" border border-gray-700 rounded-lg p-4">
            <h4 className="text-blue-400 font-medium mb-2">
              💒 My Wedding Invitation Website{" "}
              <span className="text-gray-500 text-sm">Public</span>
            </h4>
            <p className="text-gray-400 text-sm">
              A multilingual wedding site with RSVP, a Spotify-powered music
              request feature
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
