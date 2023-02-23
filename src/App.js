import React from 'react'
import Card from './Data/Card'
import Data from './Data/Data'
function App() {
const datamap=Data.map(data=>(

  <Card  key={data.key} title={data.title}  />
)

)
  return (
<>

{datamap}

</>
  )
}

export default App