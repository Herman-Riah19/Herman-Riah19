import React from 'react'
import SocialLink from '../section/socialLink'

const persone = {
    name: "Bienvenu sur notre site",
    speciality: ["Developpeur", "Designer", "Freelancer"]
} 

const Cover = () => {
    return (
        <section className="hero d-flex flex-column justify-content-center">
            <div className="container">
                <h1>{persone.name}</h1>
                <p>Nous sommes un groupe de {persone.speciality.map(item => <span className="typed">{item} </span>)}</p>

                <SocialLink />
            </div>
        </section>
    )
}

export default Cover
