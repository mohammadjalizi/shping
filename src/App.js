import React from 'react'
import Card from './Data/Card'
import Data from './Data/Data'
function App() {
const datamap=Data.map((data)=>{

  <Card  key={data.id} title={data.title}  />
})
  return (
<>

<Card title="hello" />

</>
  )
}

export default App