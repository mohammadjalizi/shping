import React from 'react'

function Map() {
    const Arry=[

        {id:1,name:'mohammad',price:33},
{id:2,name:'ali',price:44},
{id:3,name:'jalizi',price:77},
    ]
    const ULLI=Arry.map((ITEM)=>{

<h3 key={ITEM.id} >  {ITEM.name}  </h3>

    })
  return (
    <div>{ULLI}</div>
  )
}

export default Map