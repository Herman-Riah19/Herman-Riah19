import React, { useState } from 'react'
import Presentation from './section/presentation'
import { fact } from '../model/constant'
import { IconSection } from './section/iconSection'

export const FactActivity = () => {
    const activities = fact.activies

    return (
        <div className="fact">
            <Presentation entete={fact.entete} description={fact.description}/>
            <div className="row">
                {activities.map(act => 
                    <IconSection emojie={act.emojie} point={act.point} note={act.note} />
                )}
            </div>
        </div>
    )
}
