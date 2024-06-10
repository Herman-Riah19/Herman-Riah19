'use client'
import { Menu } from 'lucide-react'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useRouter } from 'next/navigation';

type NavSheetProps = {
    pages: {
        name: string;
        link: string;
    }[]
}
const NavbarSheet: React.FC<NavSheetProps> = ({ pages }) => {
    const route = useRouter()
    const [open, setOpen] = useState(false);

    const handleClose = (link: string) => {
        setOpen(!open);
        route.push(link);
    }

    return (
        <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-8">
            <Sheet open={open}>
                <SheetTrigger asChild>
                    <Button
                        variant="outline"
                        size="icon"
                        className="shrink-0 md:hidden"
                        onClick={(e) => setOpen(true)}
                    >
                        <Menu className="h-5 w-5" />
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" onCloseAutoFocus={e => setOpen(false)}>
                    <nav className="grid gap-2 text-lg font-medium">
                        <Button
                            variant="destructive"
                            className="text-primary hover:text-foreground m-0 bg-transparent "
                            onClick={e => {
                                e.preventDefault()
                                handleClose("/")
                            }}>
                            Midas
                        </Button>
                        {pages.map((page) => (
                            <Button
                                key={page.name}
                                variant="destructive"
                                className="text-primary hover:text-foreground m-0 bg-transparent "
                                onClick={e => {
                                    e.preventDefault()
                                    handleClose(page.link)
                                }}>
                                {page.name}
                            </Button>
                        ))}
                    </nav>
                </SheetContent>
            </Sheet>
        </div>
    )
}

export default NavbarSheet