import type { Metadata } from "next";
import "./globals.css";
import ElfsightChatbot from "@/components/chatbot";

export const metadata: Metadata = {
  title: "Sharon Mwangi's Portfolio",
  description:
    "An interactive terminal-style portfolio showcasing my skills and projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-terminal bg-[#0D1117]">
        {children}
        <ElfsightChatbot />
      </body>
    </html>
  );
}
