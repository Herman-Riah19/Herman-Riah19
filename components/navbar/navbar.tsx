import React from "react";
import Link from "next/link";
import NavbarSheet from "./navbar-sheet";
import NavLangue from "./navLangue";
import { getLocale, getTranslations } from 'next-intl/server';

const Navbar: React.FC = async () => {
  const t = await getTranslations('Navbar');
  const locale = await getLocale();

  const pages = [
    {
      name: t('Home'),
      link: `/`,
    },
    {
      name: t("About"),
      link: `#about`,
    },
    {
      name: t("Services"),
      link: `#`,
    },
    {
      name: t("Technologie"),
      link: `#technologie`,
    },
    {
      name: t("Resume"),
      link: `#resume`,
    },
    {
      name: t("Contact"),
      link: `#contact`,
    },
  ];

  return (
    <header className="sticky top-0 flex h-16 z-10 items-center gap-1 border-b bg-background backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 md:px-6">
      <Link
        href="/"
        className="flex items-center gap-4 text-lg font-semibold md:text-base"
      >
        <span className="font-extrabold">Hermann</span>
      </Link>
      <NavbarSheet pages={pages} />

      <nav className="flex flex-col text-lg font-medium sm:hidden md:flex justify-end md:flex-row md:items-center md:gap-3 md:text-sm lg:gap-6">
        {pages.map((page) => (
          <Link
            key={page.name}
            href={page.link}
            className="text-muted-foreground transition-colors hover:text-foreground w-[5vw]"
          >
            {page.name}
          </Link>
        ))}
      </nav>

      <div className="flex w-full justify-end gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <NavLangue />
      </div>
    </header>
  );
};

export default Navbar;
