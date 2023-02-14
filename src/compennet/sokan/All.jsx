import React from 'react'
import Navbar from './Navbar/Navbar'
import ALLProudocts from './proudocts/ALLProudocts'
import Footer from './footer/Footer'

import ProudoctsD from './proudocts/Data/Proudocts'
function All() {
  return (
  <>
  <Navbar/>

<ProudoctsD  ProudoctData={ALLProudocts}/>
  <Footer/>
  
  </>
  )
}

export default All