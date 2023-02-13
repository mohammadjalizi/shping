import React from 'react'
import Array from '../sokan/proarry.json'
const Project = () => {
  return (
    <div className=' h-[100vh] '>Project
    
   {Array.map((item=>(
  <h1>{item.name}</h1>

   )))}
    
    </div>
  )
}

export default Project