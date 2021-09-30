import React from 'react'

const Presentation = ({ entete, description }) => {
    return (
        <div className="presentation">
            <h1>{entete}</h1>
            {description && (
                <p>{description}</p>
            )}
        </div>
    )
}

export default Presentation
