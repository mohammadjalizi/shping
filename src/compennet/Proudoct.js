import React from 'react'
import img1 from '../compennet/images/Album 1.png'
import img2 from '../compennet/images/Album 2.png'
import img3 from '../compennet/images/Album 3.png'

let MULIST=[


{id:1,name:'mohammad',price:2,Image:img1},

{id:2,name:'mohammad',price:33,Image:img2},
{id:3,name:'ali',price:66,Image:img3},
{id:4,name:'hassan',price:8,Image:img1},

]
function Proudoct() {
  const ullistmap=MULIST.map((meal)=><li> {meal.name}  </li>)
  return (
    <div>

{ullistmap}


    </div>
  )
}

export default Proudoct