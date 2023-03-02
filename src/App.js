import React, { useEffect } from 'react'
import Card from './Data/Card'

import axios from 'axios'
function App() {

useEffect(()=>{
  axios.get("https://fakestoreapi.com/products")
  .then(Response=>{
console.log(Response.data)

  })
})

  return (
<>

<Card proudoctsData={Data}/>
</>
  )
}

export default App



// ?git add .