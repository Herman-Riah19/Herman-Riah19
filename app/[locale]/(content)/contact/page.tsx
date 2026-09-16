import { MailContact } from "@/components/landing-page/contact";
import { Slogan } from "@/components/landing-page/slogan";
import * as React from "react";

export default function PageContact() {
  return (
    <div className="w-full bg-background text-foreground font-mono">
      <Slogan />
      <MailContact />
    </div>
  );
}
