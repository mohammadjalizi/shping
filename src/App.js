import React, { useEffect } from 'react'
import Card from './Data/Card'
import Data from '../src/Data/Data'
import axios from 'axios'
import Map from './Map'
function App() {

useEffect(()=>{
  axios.get("https://fakestoreapi.com/products")
  .then(Response=>{
console.log(Response.data)

  })
})

  return (
<>
<map/>
<Card proudoctsData={Data}/>
</>

  )
}

export default App



// ?git add .