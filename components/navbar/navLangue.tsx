"use client"
import React from 'react'
import { useRouter } from 'next/navigation';
import { useLocale } from "next-intl";
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

const NavLangue = () => {
  const route = useRouter();
  const localActive = useLocale();

  const handleClick = () => {
    if(localActive === "fr") {
      route.push("/en")
    } else {
      route.push("/fr")
    }
  }
  return (
    <Button
      variant="ghost"
      type="button"
      size="icon"
      className="px-2"
      onClick={handleClick}
    >
      <Globe className="h-[1.2rem] w-[1.2rem] text-neutral-800 dark:text-neutral-200" />
    </Button>
  )
}

export default NavLangue