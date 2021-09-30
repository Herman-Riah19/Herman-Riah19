import React from 'react'
import Presentation from './section/presentation'
import Progress from './section/progress'

const Skill = ({ data }) => {
    return (
        <div className="row skill">
            <Presentation entete="Skill" />
            {data.map( tool => (
                <div className="col-lg-6">
                    <h2>{tool.title}</h2>
                    {tool.content.map(item => 
                        <Progress matiere={item.matiere} point={item.point} />    
                    )}
                </div>
            ))}
        </div>
    )
}

export default Skill
