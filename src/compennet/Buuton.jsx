import React, { useState } from 'react'

function Buuton() {
    const[show,setshow]=useState(false)
  return (
    <div>


<button onClick={()=>setshow(!show)}>click</button>

<hr/>
{ show? "tru" :"false"  }
    </div>
  )
}

export default Buuton