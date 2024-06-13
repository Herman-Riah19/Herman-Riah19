import { TechnologieModel } from '@/model/TechnologieModel'
import { ScrollArea } from '@radix-ui/react-scroll-area'
import React from 'react'
import AnimateFeature from '@/components/animation/animateFeature'
import CardTechnologie from '@/components/card/card-techno'

const ListTech = () => {
    return (
        <ScrollArea>
            <AnimateFeature>
                <div className='flex gap-2 w-max'>
                    {TechnologieModel.map(tech => (
                        <CardTechnologie
                            id={tech.id}
                            name={tech.name}
                            language={tech.language}
                            type={tech.type}
                            icon={tech.icon}
                            star={tech.star} />
                    ))}
                </div>
            </AnimateFeature>
        </ScrollArea>
    )
}

export default ListTech