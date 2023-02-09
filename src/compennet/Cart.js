import React from 'react'

function Cart(props) {
  return (
    <div className=' card  flex  w-2/5 m-auto bg-yellow-500'>

      <div className=' img   my' >

    
{props.img1}  
      </div>
<div className=' '>
{props.id}
{props.name}
<hr/>

{props.price}
</div>

    </div>
  )
}

export default Cart