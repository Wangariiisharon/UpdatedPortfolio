"use client";

import Script from "next/script";

export default function ElfsightChatbot() {
  return (
    <>
      <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
      <div
        className="fixed bottom-4 right-4 z-50 w-16 h-16 sm:w-20 sm:h-20"
        data-elfsight-app-lazy
      >
        <div className="elfsight-app-7b8f5ef8-c8e5-454f-bbab-04b7cb92c939" />
      </div>
    </>
  );
}
