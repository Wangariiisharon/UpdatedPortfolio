import { MapPin, Mail } from "lucide-react";
import { techStack } from "../app/data";
import Image from "next/image";

const GithubIcon = () => (
  <svg width="15" height="15" viewBox="0 0 16 16" fill="currentColor">
    <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="15" height="15" viewBox="0 0 16 16" fill="currentColor">
    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
  </svg>
);

export default function Sidebar() {
  return (
    <aside className="w-full md:w-[280px] lg:w-[296px] shrink-0 md:h-full px-4 md:px-5 py-5 md:py-6">
      {/* Avatar */}
      <div className="relative w-[180px] h-[180px] md:w-[220px] md:h-[220px] rounded-full border-2 border-[#30363d] overflow-hidden mb-4 mx-auto md:mx-0">
        <div className="w-full h-full flex items-center justify-center l">
          <Image
            src="/githubAvatar.png"
            alt="Sharon Mwangi"
            width={180}
            height={180}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      <h1 className="text-xl md:text-2xl font-semibold text-[#f0f6fc] leading-tight mb-1 text-center md:text-left">
        Sharon Mwangi
      </h1>
      <p className="text-lg md:text-xl font-light text-[#8b949e] mb-3 text-center md:text-left">
        Software Engineer
      </p>
      <p className="text-sm text-[#c9d1d9] leading-relaxed mb-4 border-l-2 border-[#238636] pl-3">
        Software Engineer with a deep passion for computer science. Currently
        working on cool web and mobile projects.
      </p>
      <button
        onClick={() => window.open("/resume.pdf", "_blank")}
        className="w-full py-1.5 px-4 bg-[#212830] border border-[#30363d] rounded-md text-[#f0f6fc] text-sm font-medium hover:bg-[#2d333b] hover:border-[#8b949e] transition-all mb-4 cursor-pointer"
      >
        View Resume
      </button>
      <div className="flex gap-4 mb-4 text-sm justify-center md:justify-start">
        <span className="text-[#8b949e]">
          <strong className="text-[#f0f6fc] font-semibold">50+</strong> repos
        </span>
        <span className="text-[#8b949e]">
          <strong className="text-[#f0f6fc] font-semibold">4</strong> projects
        </span>
      </div>
      <div className="space-y-1.5 mb-5">
        {[
          {
            icon: <MapPin size={15} />,
            content: <span>/home/sharon-mwangi</span>,
          },
          {
            icon: <Mail size={15} />,
            content: (
              <a
                href="mailto:mwangiiisharon@gmail.com"
                className="text-[#388bfd] hover:underline"
              >
                mwangiiisharon@gmail.com
              </a>
            ),
          },
          {
            icon: <GithubIcon />,
            content: (
              <a
                href="https://github.com/Wangariiisharon"
                target="_blank"
                rel="noreferrer"
                className="text-[#388bfd] hover:underline"
              >
                Wangariiisharon
              </a>
            ),
          },
          {
            icon: <LinkedinIcon />,
            content: (
              <a
                href="https://linkedin.com/in/sharon-mwangi-656a17233"
                target="_blank"
                rel="noreferrer"
                className="text-[#388bfd] hover:underline"
              >
                Sharon Mwangi
              </a>
            ),
          },
        ].map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-2 text-[#8b949e] text-[13px]"
          >
            <span className="shrink-0">{item.icon}</span>
            <span className="truncate">{item.content}</span>
          </div>
        ))}
      </div>
      {/* <p className="text-[11px] font-semibold text-[#8b949e] uppercase tracking-widest mb-2">
        Tech Stack
      </p>
      <div className="flex flex-wrap gap-1.5">
        {techStack.map((t) => (
          <span
            key={t.label}
            className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono border ${t.color}`}
          >
            {t.label}
          </span>
        ))}
      </div> */}
    </aside>
  );
}
