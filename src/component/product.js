import React from 'react'
import Presentation from './section/presentation'
import IconCard from './card/iconCard'
import { products } from '../model/card.model'

const Product = () => {

    return (
        <div className="product">
            <Presentation entete="Nos produits" />
            <div className="container row">
                    {products.map(item => (
                        <div className="col-lg-3">
                            <IconCard 
                                image={item.image} 
                                name={item.name} 
                                price={item.price}
                                description={item.description} />
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default Product
