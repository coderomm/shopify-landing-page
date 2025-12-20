'use client'

import CTASection from "@/components/cta";
import FooterSection from "@/components/footer";
import NavHeader from "@/components/header";
import AgencyFreelanceHero from "@/components/hero/agency-freelance-hero";
import ProjectShowcase from "@/components/projects/project-showcase";

export default function Home() {
  return (
    <main className="w-full min-h-screen">
      <NavHeader />
      <AgencyFreelanceHero />
      <ProjectShowcase />
      <CTASection />
      <FooterSection />
    </main>
  );
}
