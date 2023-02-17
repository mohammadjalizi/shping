import React from 'react'


const Dummilisy=[

{id:1,name:'mohammad'},
{id:2,name:'ali'},
{id:3,name:'jalizi'},
{id:4,name:'hassan'},
{id:5,name:'ahwaz'},



]
function Avalibs() {
const malilist=Dummilisy.map(meal=><li>{meal.id}</li>)

  return (
    <div>
        
<ul>

{malilist}

</ul>


    </div>
  )
}

export default Avalibs