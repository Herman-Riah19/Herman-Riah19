"use client"
import React from "react";
import Link from "next/link";
import NavbarSheet from "./navbar-sheet";
import NavLangue from "./navLangue";
import { useLocale, useTranslations } from "next-intl";

const Navbar: React.FC = () => {
  const t = useTranslations('Navbar');
  const locale = useLocale();
  const [state, setState] = React.useState(false);


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

  const Brand = () => (
    <div className="flex items-center justify-between py-5 md:block">
      <a href="javascript:void(0)">
        <img
          src="https://www.farmui.com/logo.svg"
          className="rounded-full"
          width={50}
          height={50}
          alt="FarmUI logo"
        />
      </a>
      <div className="md:hidden">
        <button
          className="menu-btn text-white hover:text-white"
          onClick={() => setState(!state)}
        >
          {state ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );

  React.useEffect(() => {
    document.onclick = (e) => {
      const target = e.target;
      if (!target.closest(".menu-btn")) setState(false);
    };
  }, []);

  return (
    <div className="relative">
      <header>
        <div className={`md:hidden mx-2 pb-5`}>
          <Brand />
        </div>
        <nav
          className={`pb-5 md:text-sm absolute top-0 inset-x-0 bg-white shadow-lg rounded-xl border mx-2 mt-2 md:shadow-none md:border-none md:mx-0 md:mt-0 md:relative md:bg-transparent`}
        >
            <NavbarSheet pages={pages} />
          <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
            <Brand />
            <div
              className={`flex-1 text-white/90 items-center mt-8 md:mt-0 md:flex block `}
            >
              <ul className="mx-auto flex justify-center items-center space-y-6  md:space-x-6 md:space-y-0 rounded-full dark:bg-zinc-800/10  dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset] px-6 py-4 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur  dark:text-zinc-200 dark:ring-white/10 w-fit ">
                {pages.map((page) => {
                  return (
                    <li key={page.name} className="md:text-white/70 sm:text-black md:hover:text-white">
                      <Link
                        key={page.name}
                        href={page.link}
                      >
                        {page.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <NavLangue />
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;