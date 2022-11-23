import React, { Component } from 'react'

 class Event extends Component {
    handler = (e) =>{
        console.log('Button click');
    }
  render() {
    return (
      <div>
        <button style={{backgroundColor:'red'}} type='button' onClick={this.handler}>Click</button>
      </div>
    )
  }
}
export default Event