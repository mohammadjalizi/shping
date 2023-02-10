import React, { Component } from 'react'

export default class Product extends Component {

    render() {
        let{id,title,price,img}=this.props
        return (
            <div class="">
                <span class="shop-item-title">{title}</span>
                <img class="shop-item-image" src={img}/>
                <div class=" flex  justify-between">
                    <span class="shop-item-price">${price}</span>

                    <button
                        class="btn btn-primary shop-item-button"
                        type="button">
                        ADD TO CART
                    </button>
                </div>
            </div>
        )
    }
}
