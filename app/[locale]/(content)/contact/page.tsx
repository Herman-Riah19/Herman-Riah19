import { AnimateWelcome } from "@/components/animation/animateWelcome";
import { MailContact } from "@/components/landing-page/contact";
import { Slogan } from "@/components/landing-page/slogan";
import * as React from "react";

export default function PageContact() {
  return (
    <div className="flex flex-col gap-4 max-w-6xl mx-auto">
      <Slogan />
      <AnimateWelcome>
        <MailContact />
      </AnimateWelcome>
    </div>
  );
}
