import React from 'react'
import img1 from '../compennet/images/Album 1.png'
import img2 from '../compennet/images/Album 2.png'
import img3 from '../compennet/images/Album 3.png'
import Cart from './Cart'

import React from 'react'

import React, { Component } from 'react'

export default class Proudoct extends Component {
  constructor(props){

super(props)

this.state={
proudocts:[



{id:1,name:'mohammad',price:2,Image:img1},

{id:2,name:'mohammad',price:33,Image:img2},
{id:3,name:'ali',price:66,Image:img3},
{id:4,name:'hassan',price:8,Image:img1},

]




}


  }
  render() {
    return (
      <div>Proudoct</div>
    )
  }
}
