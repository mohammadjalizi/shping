import React, { useEffect, useState } from 'react'

function Cimpennet() {
    const[deta,setData]=useState([])


    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((datarespansive) => setData(datarespansive))
        .catch(()=>alert("erroe"))
      
    },[])

  return (
    <div>

app


<ul>
{deta.map(item=><li key={item.id} > #{item.id} - {item.title}  </li>)}


</ul>

    </div>
  )
}

export default Cimpennet