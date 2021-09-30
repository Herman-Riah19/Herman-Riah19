import React from 'react'
import { diplome, experience, formation } from '../model/resume.model'
import ResumeItem from './resumeItem'
import Presentation from './section/presentation'

const Resume = () => {
    return (
        <div className="resume">
            <Presentation entete="Resume" />
            <div className="row">
                <div className="col-lg-6">
                    <h3 class="resume-title">Sumary</h3>
                    <div class="resume-item pb-0">
                        <h4>Herman Christian RAZAFINDRANAIVO</h4>
                        <p><em>Développeur Full stack depuis 2 ans et spécialisé dans le développement des applications d'administration des données que se soient des applications web ou desktop</em></p>
                        <ul>
                            <li>Lot G 129 Bis Ankadiaivo Alasora</li>
                            <li>033 31 570 63</li>
                            <li>hermanrazafinbdranaivo@gmail.com</li>
                        </ul>
                    </div>
                    <h3 class="resume-title">Education</h3>
                    {diplome.map(item => <ResumeItem title={item.title} date={item.date} institute={item.institute} description={item.description} />)}
                </div>
                <div className="col-lg-6">
                    <h3 class="resume-title">Professional Experience</h3>
                    {experience.map(item => <ResumeItem title={item.title} date={item.date} institute={item.institute} description={item.description} />)}
                    
                    <h3 class="resume-title">Formations Professionelles</h3>
                    {formation.map(item => <ResumeItem title={item.title} date={item.date} institute={item.institute} description={item.description} />)}
                </div>
            </div>
        </div>
    )
}

export default Resume
