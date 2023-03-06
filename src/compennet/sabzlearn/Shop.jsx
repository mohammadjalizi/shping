import React, { Component } from 'react'
import Product from './Product'
import img1 from '../compennet/images/Album 1.png'
import img2 from '../compennet/images/Album 2.png'
import img3 from '../compennet/images/Album 3.png'
import img4 from '../compennet/images/Album 4.png'
export default class Shop extends Component {

    constructor(props) {
        super(props)

        this.state = {
            products: [
                { id: 1, title: 'Album 1', price: 5, img:img1},
                { id: 2, title: 'Album 2', price: 15, img:img2 },
                { id: 3, title: 'Album 3', price: 20, img: img3},
                { id: 4, title: 'Album 4', price: 100, img: img4 },
                { id: 5, title: 'Coffee', price: 5, img: img1},
                { id: 6, title: 'Shirt', price: 50, img:img2  },
            ],

            shoppingCart: [],
         
        }

this.addproudocttocart=this.addproudocttocart.bind(this)
    }
addproudocttocart(proudoctid){
console.log(proudoctid)
let mainproudoct=this.state.products.find(item=>{

    return item.id ===proudoctid
})
console.log(mainproudoct)
this.setState(previtem=>{
return{
    shoppingCart:previtem.shoppingCart
}

})
}

    render() {
        return (
            <>
                <header class=" flex bg-yellow-700 p-4">
                    <nav class="main-nav nav">
                        <ul className=' flex justify-center gap-4'>
                            <li><a href="#">HOME</a></li>
                            <li><a href="#">STORE</a></li>
                            <li><a href="#">ABOUT</a></li>
                        </ul>
                    </nav>
                    <h1 class="band-name band-name-large">SabzLearn Shop</h1>
                </header>
                <section class="container content-section">
                    <div class=" flex w-3/4 gap-5">
{this.state.products.map(item=>(
<Product  {...item}   ONaddproudoct={this.addproudocttocart} />



))}
                      
                    </div>
                </section>
                <section class=" my-16 bg-yellow-300">
                    <h2 class=" text-center my-12">CART</h2>
                    <div class=" flex justify-between w-3/4">
                        <span class="cart-item cart-header cart-column">ITEM</span>
                 
                    </div>
                    <div class="cart-items">

                 


                    </div>
                    <button class="btn btn-primary btn-purchase" type="button">
                        Empty Cart
                    </button>
                </section>
                <footer class="main-footer">
                    <div class="container main-footer-container">
                        <h3 class="band-name">The Generics</h3>
                        <ul class="nav footer-nav">

                         
                        </ul>
                    </div>
                </footer>


            </>
        )
    }
}