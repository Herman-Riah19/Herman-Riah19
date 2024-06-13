import { PenTool } from 'lucide-react'
import React from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image';

type CardButtonTechProps = {
    name: string;
    icon: string;
}
const CardButtonTech = ({ name, icon }: CardButtonTechProps) => {
    return (
        <Button variant="outline" className='flex gap-4 bg-transparent'>
            <Image src={icon} alt={name} height={20} width={20} />
            {name}
        </Button>

    )
}

export default CardButtonTech