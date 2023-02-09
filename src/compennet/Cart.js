import React from 'react'

function Cart(props) {
  return (
    <div className=' card  flex'>

      <div className=' img'>

        <img src={props.img}/>
      </div>
<div className=''>

<h1>{props.name}</h1>

</div>


    </div>
  )
}

export default Cart