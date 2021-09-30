import React, { Component } from 'react'
import Product from '../component/product'
import Carousel from '../component/cover/carousel'

export default class Productions extends Component {
    render() {
        return (
            <div className="productions">
                <div className="container">
                    <Carousel />
                    <Product />
                </div>
            </div>
        )
    }
}
