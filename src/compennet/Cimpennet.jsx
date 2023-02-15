import React, { useState } from 'react'

function Cimpennet() {
    const[deta,setData]=useState([])

    fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => response.json())
  .then((datarespansive) => setData(datarespansive))
  .catch(()=>alert("erroe"))

  return (
    <div>Cimpennet</div>
  )
}

export default Cimpennet