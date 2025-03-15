import BlurFade from '@/components/container/blur-fade'
import HobieProject from '@/components/container/hobieProject'
import { Projects } from '@/components/container/project'
import Footer from '@/components/footer'
import { AnimatedGradientText } from '@/components/magicui/animated-gradient-text'
import { BLUR_FADE_DELAY } from '@/lib/constant'
import { cn } from '@/lib/utils'
import { ChevronRight } from 'lucide-react'
import { getLocale, getTranslations } from 'next-intl/server'
import Link from 'next/link'
import React from 'react'

const PageProjects = async () => {
  const locale = await getLocale();
  const t = await getTranslations("Home");

  return (
    <section className='flex flex-col gap-4'>
      <Projects />
      <HobieProject />
      <Link href={`/${locale}/about`} className="group relative mx-auto flex items-center justify-center rounded-full px-4 py-1.5 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f] ">
        <span
          className={cn(
            "absolute inset-0 block h-full w-full animate-gradient rounded-[inherit] bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:300%_100%] p-[1px]",
          )}
          style={{
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "destination-out",
            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            maskComposite: "subtract",
            WebkitClipPath: "padding-box",
          }}
        />
        🎉 <hr className="mx-2 h-4 w-px shrink-0 bg-neutral-500" />
        <AnimatedGradientText className="text-xl font-medium">
          {t("Resume")}
        </AnimatedGradientText>
        <ChevronRight
          className="ml-1 size-4 stroke-neutral-500 transition-transform
          duration-300 ease-in-out group-hover:translate-x-0.5"
        />
      </Link>
      <Footer />
    </section>
  )
}

export default PageProjects