"use client";
import {
  Coaches,
  Solution,
  Offer,
  Hero,
  Intro,
  Pricing,
  CallToAction,
} from "@/components/layout";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);
  return (
    <div>
      <Hero />
      <Intro />
      <Coaches />
      <Solution />
      <Offer />
      <Pricing />
      <CallToAction />
    </div>
  );
}
