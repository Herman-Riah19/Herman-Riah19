import React from 'react'

const Progress = ({matiere,point}) => {
    return (
        <div className="progress">
            <span className="skill">
                {matiere}
                <i className="val">{point} %</i>
            </span>
            <div className="progress-bar-wrap">
                <div className="progress-bar" style={{width: point + '%'}} role="progressbar" aria-valuenow={point} aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </div>
    )
}

export default Progress
