import React, { Component } from 'react'
import img1 from "../compennet/images/Album 1.png"
import img2 from "../compennet/images/Album 2.png"
import img3 from "../compennet/images/Album 3.png"
import Proudoct from './Proudoct'
export default class Shop extends Component {
    constructor (props){
 super(props)

 this.state={
    proudoctsid:[
{ id:1  , title:'album1',price:5,img: img1    },
{ id:2  , title:'album2',price:5,img: img2   },
{ id:3 , title:'album3',price:5,img: img3    },




    ]
   


 }

    }
  render() {
    return (
      <div>
{this.state.proudoctsid.map(proudoct=>(
<Proudoct   {...proudoct2}   />

))}


      </div>
    )
  }
}
