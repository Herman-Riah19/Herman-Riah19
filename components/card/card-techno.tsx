import React from 'react'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import Image from 'next/image'
import { Techno } from '@/model/TechnologieModel'
import { Star } from 'lucide-react'

const CardTechnologie: React.FC<Techno> = ({ id, name, language, type, icon, star }) => {
    return (
        <Card key={id}>
            <CardContent className='flex gap-2 m-2'>
                <Image src={icon} alt={name} height={35} width={40} />
                <div className='block mt-2'>
                    <h4 className='text-md font-bold'>{name}</h4>
                    {/* <h4 className='text-sm font-semibold'>{language ? language : ""}</h4> */}
                    <h4 className='text-sm font-thin'>{type ? type : ""}</h4>
                </div>
            </CardContent>
            <CardFooter className='flex gap-2'>
                {[1,2,3,4,5].map(item => (
                    <div>
                        {item <= star ?  <Star fill="yellow" strokeWidth={0} /> : <Star fill="#111" strokeWidth={0} /> }
                    </div>
                ))}
            </CardFooter>
        </Card>
    )
}

export default CardTechnologie