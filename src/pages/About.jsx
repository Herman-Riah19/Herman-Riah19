import React from 'react'
import CirucilumVitae from '../component/cirucilumVitae'
import Resume from '../component/resume'
import Cover from '../component/cover/cover'
import Presentation from '../component/section/presentation'
import Skill from '../component/skill'
import { apropos } from '../model/constant'

const About = () => {
    return (
        <div className="about">
            <Cover />
            <div className="container">
                <Presentation entete={apropos.entete} description={apropos.description} />
                <CirucilumVitae data={apropos}/>
                <Skill data={apropos.skill.theme} />
                <Resume />
            </div>
        </div>
    )
}

export default About
