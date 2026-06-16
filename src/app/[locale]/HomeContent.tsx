"use client";

import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Process from "@/components/sections/Process";
import WorkPreview from "@/components/sections/WorkPreview";
import KvTeaser from "@/components/sections/KvTeaser";
import AboutTeaser from "@/components/sections/AboutTeaser";
import HomeNav from "@/components/sections/HomeNav";
import ContactCTA from "@/components/sections/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Process />
      <WorkPreview />
      <KvTeaser />
      <AboutTeaser />
      <HomeNav />
      <ContactCTA />
    </>
  );
}
