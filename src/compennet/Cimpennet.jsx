import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Cimpennet() {
    const[deta,setData]=useState([])


useEffect(() => {
axios.get("https://jsonplaceholder.typicode.com/posts")
.then(Response=>console.log(Response))

}, [])

  return (
    <div>

app




    </div>
  )
}

export default Cimpennet