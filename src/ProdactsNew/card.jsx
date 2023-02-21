import React from 'react'
import shoping from './shoping'
import proudoctsname from './proudoctsname'
function card() {
    const datacompt=shoping.map((data)=>{

return (

<proudoctsname    key={data.id}

title={data.title}
/>


)

    })
  return (
    <div>card


{datacompt}


    </div>
  )
}

export default card