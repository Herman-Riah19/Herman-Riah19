import React from 'react'

export const IconSection = ({emojie, point, note }) => {
    return (
        <div className="icon-section col-lg-3 col-md-6">
            <div className="count-box">
                <div className="icon">
                    <i className={emojie} ></i>
                </div>
                <span className="purecounter">{point}</span>
                <p>{note}</p>
            </div>
        </div>
    )
}
