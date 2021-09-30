import React from 'react'

const ProjectCard = ({image, name, description, tech}) => {
    return (
        <div className="icon-card card">
            <div className="card-header">
                <img src={image} class="img-fluid" alt="" />
            </div>
            <div className="card-body">
                <div className="container">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div className="card-footer">
                <div className="row">
                    {tech.map(item => (
                        <span className="tech">{item}</span>
                    ))}
                    <button className="btn ml-auto">
                        <i className="fas fa-eye"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
