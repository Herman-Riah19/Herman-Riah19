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
    <div className="flex w-full justify-end gap-4 md:ml-auto md:gap-2 lg:gap-4">
      <Select
        onValueChange={(e) => startTransition(() => route.replace(`/${e}`))}
        defaultValue={localActive}
        disabled={isPending}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Change language" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="fr">Francais</SelectItem>
            <SelectItem value="en">English</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}

export default NavLangue