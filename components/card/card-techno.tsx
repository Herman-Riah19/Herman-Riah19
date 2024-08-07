import React from 'react'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import Image from 'next/image'
import { Techno } from '@/model/TechnologieModel'
import { Star } from 'lucide-react'

const CardTechnologie: React.FC<Techno> = ({ id, name, language, type, icon, star }) => {
    return (
        <Card key={id} className='dark:bg-white'>
            <CardContent className='flex gap-2 m-2'>
                <Image  src={icon} alt={name} height={40} width={40} />
                <div className='block mt-2'>
                    <h4 className='text-md font-bold dark:text-secondary'>{name}</h4>
                    <h4 className='text-sm font-normal dark:text-secondary'>{language ? language : ""}</h4>
                    <h4 className='text-sm font-thin dark:text-secondary'>{type ? type : ""}</h4>
                </div>
            </CardContent>
            <CardFooter className='flex gap-2'>
                {[1,2,3,4,5].map(item => (
                    <div>
                        {item <= star ?  <Star fill="#2462EA" strokeWidth={0} /> : <Star fill="#111" strokeWidth={0} /> }
                    </div>
                ))}
            </CardFooter>
        </Card>
    )
}

export default CardTechnologie