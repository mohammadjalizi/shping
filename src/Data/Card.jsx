import React from 'react'
import Proudoct from './Proudoct'
function Card({proudoctsData}) {

  return (
    <div>
        
{
proudoctsData.map(item=> <Proudoct key={item.id} Proudoct={item}/>)

}

    </div>
  )
}

export default Card