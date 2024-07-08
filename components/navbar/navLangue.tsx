"use client"
import React, { useTransition } from 'react'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { useRouter } from 'next/navigation';
import { useLocale } from "next-intl";

const NavLangue = () => {
  const [isPending, startTransition] = useTransition();
  const route = useRouter();
  const localActive = useLocale();

  return (
    <div className="items-center justify-end mt-6 space-y-6 md:flex md:mt-0">
      <div
        className="flex items-center justify-center gap-x-1 px-4 text-white font-medium transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset] rounded-full md:inline-flex "
      >
        <Select
          onValueChange={(e) => startTransition(() => route.replace(`/${e}`))}
          defaultValue={localActive}
          disabled={isPending}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Change language" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="fr" className='text-primary'>Francais</SelectItem>
              <SelectItem value="en" className='text-primary'>English</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  )
}

export default NavLangue