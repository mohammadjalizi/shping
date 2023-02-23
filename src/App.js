import React from 'react'
import Card from './Data/Card'
import Data from './Data/Data'
function App() {
const datamap=Data.map(item=>(

<Card key={item.key}  title={item.name}  />

))


  return (
<>

{datamap}

</>
  )
}

export default App