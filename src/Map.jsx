import React from 'react'

function Map() {
    const propslist=[
{id:1,name:'mohammad',price:33},
{id:2,name:'ali',price:44},
{id:3,name:'jalizi',price:77},

    ]
    const list=propslist.map((item)=>{

        <h3  key={item} > {item.name}   </h3>
    })
  return (
    <div>Map</div>
  )
}

export default Map