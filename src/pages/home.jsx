import React from 'react'
import Cover from '../component/cover/cover'
import Presentation from '../component/section/presentation'
import { apropos, bienvenu, fact } from '../model/constant'
import { projets } from '../model/card.model'
import { IconSection } from '../component/section/iconSection'
import Skill from '../component/skill'
import ProjectCard from '../component/card/projectCard'

export const Home = () => {
    return (
        <div className='home'>
            <Cover />
            <div className="container">
                <Presentation entete={bienvenu.entete} description={bienvenu.description} />

                <Presentation entete={fact.entete} description={fact.description} />
                <div className="row container">
                    {fact.activies.map(activite => (
                        <IconSection 
                            emojie={activite.emojie} 
                            point={activite.point} 
                            note={activite.note} />
                    ))}
                </div>

                <Presentation entete="Projets" />
                <div className="row container">
                    {projets.map(projet => (
                        <div className="col-lg-4">
                            <ProjectCard
                                image={projet.image} 
                                name={projet.name} 
                                price={projet.price} 
                                description={projet.description}
                                tech={projet.tech} />
                        </div>
                    ))}
                </div>

                <Skill data={apropos.skill.theme} />
            </div>
        </div>
    )
}
