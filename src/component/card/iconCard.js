import React from 'react'

const IconCard = ({image, name, price, description}) => {
    return (
        <div className="icon-card card">
            <div className="card-header">
                <img src={image} class="img-fluid" alt="" />
            </div>
            <div className="card-body">
                <div className="row">
                    <h2 className="col-lg-7">{name}</h2>
                    <small className="ml-auto">{price} $</small>
                </div>
                <p>{description}</p>
            </div>
            <div className="card-footer">
                <div className="row">
                    <button className="btn ml-auto">
                        <i className="fas fa-cart-plus"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default IconCard
