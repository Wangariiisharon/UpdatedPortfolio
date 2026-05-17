"use client";
import { useState } from "react";
import { Mail, FileText, ExternalLink, Copy, Check } from "lucide-react";

const GithubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor">
    <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor">
    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
  </svg>
);

const contacts = [
  {
    platform: "GitHub",
    handle: "@Wangariiisharon",
    desc: "Check out my code, projects, and contributions",
    href: "https://github.com/Wangariiisharon",
    icon: <GithubIcon />,
    iconBg: "bg-white/8",
    iconColor: "text-[#f0f6fc]",
    accent: "#f0f6fc",
    footer: "50+ repositories",
    copyValue: undefined as string | undefined,
  },
  {
    platform: "LinkedIn",
    handle: "in/sharon-mwangi-656a17233",
    desc: "Connect with me professionally",
    href: "https://linkedin.com/in/sharon-mwangi-656a17233",
    icon: <LinkedinIcon />,
    iconBg: "bg-[#0a66c2]/15",
    iconColor: "text-[#0a66c2]",
    accent: "#0a66c2",
    footer: "Full-stack Developer",
    copyValue: undefined as string | undefined,
  },
  {
    platform: "Email",
    handle: "mwangiiisharon@gmail.com",
    desc: "Send me a message anytime",
    href: "mailto:mwangiiisharon@gmail.com",
    icon: <Mail size={20} />,
    iconBg: "bg-[#da3633]/12",
    iconColor: "text-[#da3633]",
    accent: "#da3633",
    footer: "Response within 24h",
    copyValue: "mwangiiisharon@gmail.com",
  },
  {
    platform: "Resume",
    handle: "Download CV",
    desc: "View my complete professional background",
    href: "#",
    icon: <FileText size={20} />,
    iconBg: "bg-[#8957e5]/15",
    iconColor: "text-[#8957e5]",
    accent: "#8957e5",
    footer: "PDF format",
    copyValue: undefined as string | undefined,
  },
];

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleClick = (c: (typeof contacts)[0], e: React.MouseEvent) => {
    if (c.copyValue) {
      e.preventDefault();
      navigator.clipboard.writeText(c.copyValue).then(() => {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
      });
    }
  };

  return (
    <div>
      <h2 className="text-xl md:text-2xl font-semibold text-[#f0f6fc] mb-1">
        Get In Touch
      </h2>
      <p className="text-[13px] text-[#8b949e] mb-6">
        Let&apos;s connect! Feel free to reach out through any of these
        platforms
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {contacts.map((c) => (
          <a
            key={c.platform}
            href={c.href}
            target={c.href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            onClick={(e) => handleClick(c, e)}
            className="group relative bg-[#161b22] border border-[#30363d] rounded-md p-5 hover:border-[#8b949e] transition-all hover:-translate-y-px block overflow-hidden"
          >
            <div className="absolute inset-x-0 top-0 h-[3px] rounded-t-md" />
            <div
              className={`w-10 h-10 rounded-lg ${c.iconBg} ${c.iconColor} flex items-center justify-center mb-3`}
            >
              {c.icon}
            </div>
            <p className="text-[14px] font-semibold text-[#f0f6fc] mb-1">
              {c.platform}
            </p>
            <p className="text-[13px] font-mono text-[#388bfd] mb-2 truncate">
              {c.handle}
            </p>
            <p className="text-[12px] text-[#8b949e] leading-relaxed mb-4">
              {c.desc}
            </p>

            <div className="flex items-center justify-between border-t border-[#21262d] pt-3">
              <span className="text-[11px] text-[#8b949e]">{c.footer}</span>
              <span className="flex items-center gap-1 text-[11px] text-[#388bfd]">
                {c.copyValue ? (
                  copiedEmail ? (
                    <>
                      <Check size={10} /> Copied!
                    </>
                  ) : (
                    <>
                      <Copy size={10} /> Click to copy
                    </>
                  )
                ) : (
                  <>
                    <ExternalLink size={10} /> Visit
                  </>
                )}
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
