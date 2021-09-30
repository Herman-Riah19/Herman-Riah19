import React from 'react'

const TextCard = ({content}) => {
    return (
        <div className="text-card">
            <ul>
                <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>{content.titre} : </strong>
                    <span>{content.data}</span>
                </li>
            </ul>
        </div>
    )
}

export default TextCard
