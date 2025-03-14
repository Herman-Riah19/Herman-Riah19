"use client"
import React from 'react'
import { usePathname, useRouter } from 'next/navigation';
import { useLocale } from "next-intl";
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

const NavLangue = () => {
  const route = useRouter();
  const localActive = useLocale();
  const path = usePathname();

  const handleClick = () => {
    const newLocale = localActive === "fr" ? "en" : "fr";
    route.push(`/${newLocale}${path.substring(3)}`); 
  };
  
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