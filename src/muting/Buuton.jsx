import React, { useState } from 'react'
import Cimpennet from '../compennet/Cimpennet'
import Hide from './Hide'
import Show from './Show'
function Buuton() {
    const[show,setshow]=useState(false)
  return (
    <div>


<button onClick={()=>setshow(!show)}>click</button>

<hr/>
{ show? <Cimpennet/> :<show/>  }
    </div>
  )
}

export default Buuton