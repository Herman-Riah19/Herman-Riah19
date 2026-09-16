import React from "react";
import { HeroSection } from "@/components/container/heroSection";
import { BentoGridInfo } from "@/components/container/bentoGridInfo";
import { About } from "@/components/container/about";
import { Welcome } from "@/components/container/welcome";
import { ListTech } from "@/components/container/listTech";
import { ServicesSection } from "@/components/container/servicesSection";
import { Projects } from "@/components/container/project";
import { ListBlog } from "@/components/container/listBlog";
import Pricing from "@/components/landing-page/pricing";
import { MailContact } from "@/components/landing-page/contact";
import { Footer } from "@/components/footer";
import { getAllBlogs } from "./(content)/blog/blog.action";

export default function LandingPage() {
  let blogs: { fileName: string; title: string; description: string; created_at: string; banner_url: string }[] = [];
  try {
    blogs = getAllBlogs().slice(0, 3);
  } catch {
    blogs = [];
  }

  return (
    <main className="w-full bg-background text-foreground font-mono overflow-hidden">
      <div className="mx-auto w-full max-w-[1400px] border-x border-border">
        <HeroSection />
        <BentoGridInfo />
        <section className="w-full border-t border-border">
          <div className="px-4 sm:px-8 lg:px-12 py-16 lg:py-20 grid gap-6 lg:grid-cols-2 items-start">
            <Welcome />
            <About />
          </div>
        </section>
        <ListTech />
        <ServicesSection />
        <Projects />
        {blogs.length > 0 && <ListBlog blogs={blogs} />}
        <Pricing />
        <MailContact />
      </div>
      <Footer />
    </main>
  );
}
