"use client"
import React from 'react'
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Github, Linkedin } from "lucide-react";
import { useTranslations } from 'next-intl';

export const CardProfile = () => {
    const t = useTranslations("Welcome");
  return (
    <Card className="flex flex-col justify-center items-center shadow-none border-none bg-transparent">
        <CardHeader className="m-0 p-0 pb-2 flex justify-center items-center">
          <img src={"/assets/image/profile.jpg"} className="sm:h-[64vh] sm:ml-2 lg:h-[58vh] w-full p-0 lg:m-0" />       
        </CardHeader>
        <CardFooter>
          <div>
            <a
              rel="noreferrer noopener"
              href="https://github.com/Herman-Riah19"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">Github icon</span>
              <Github className="w-5 h-5" />
            </a>
            <a
              rel="noreferrer noopener"
              href="https://x.com/HermannRiah"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">X icon</span>
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-foreground w-5 h-5"
              >
                <title>X</title>
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
              </svg>
            </a>

            <a
              rel="noreferrer noopener"
              href="https://www.linkedin.com/in/hermann-razafindranaivo-174378237/"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">Linkedin icon</span>
              <Linkedin size="20" />
            </a>
          </div>
        </CardFooter>
      </Card>
  )
}
