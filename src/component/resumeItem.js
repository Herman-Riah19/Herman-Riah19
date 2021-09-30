import React from 'react'

const ResumeItem = ({title, date, institute, description}) => {
    return (
        <div class="resume-item">
            <div className="row">
                <span className="title col-lg-8">{title}</span>
                <small className="date col-lg-3">{date}</small>
            </div>
            <p><em>{institute}</em></p>
            <p>{description}</p>
        </div>
    )
}

export default ResumeItem
