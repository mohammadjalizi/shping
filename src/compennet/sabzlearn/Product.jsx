import React, { Component } from 'react'

export default class Product extends Component {
clickhandler(id){
 this.props.ONaddproudoct(id)
}
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
                        type="button"
                        
                        onClick={this.clickhandler.bind(this,id)}>
                        ADD TO CART
                    </button>
                </div>
            </div>
        )
    }
}
