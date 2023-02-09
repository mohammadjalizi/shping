import React, { Component } from 'react'
import IMG1    from'../compennet/images/Album 1.png'

export default class Proudoct2 extends Component {
  render() {

    return (
      <div className='  '>

<span className=' shop'>{this.props.title}</span>
<img src={this.state.img}/>
      </div>
    )
  }
}
