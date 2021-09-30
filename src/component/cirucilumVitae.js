import React, { useState } from 'react'
import {default as profile } from "../asset/images/profile.JPG"
import TextCard from './card/textCard'

const CirucilumVitae = ({ data }) => {
    const [apropos, setapropos] = useState(data)

    return (
        <div className="cv">
            <div className="row">
                <div className="col-lg-4 media">
                    <img src={profile} className="img-fluid" alt="" />
                </div>
                <div className="col-lg-8 pt-4 pt-lg-0 content">
                    <h3>Développeur web et Technicien Informatique</h3>
                    <div className="row">
                        <div className="col-lg-6">
                            {apropos.content.map(item => <TextCard content={item} />)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CirucilumVitae
