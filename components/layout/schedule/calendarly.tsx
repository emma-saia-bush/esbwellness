"use client"; // if using Next 13+ app directory

import { useEffect } from "react";

interface CalendarlyProps {
  url: string;
}

export function Calendarly({ url }: CalendarlyProps) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // !! include privacy policy
  return (
    <div
      className="calendly-inline-widget"
      data-url={`https://calendly.com/${url}?hide_gdpr_banner=1&text_color=243845&primary_color=243845`}
      style={{ minWidth: "320px", height: "700px" }}
    />
  );
}
