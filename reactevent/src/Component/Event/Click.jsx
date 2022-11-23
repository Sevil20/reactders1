import React, { Component } from 'react'
 

 class Click extends Component {
  state = {
    text: 'Click here'
  };
handler = () =>{
  console.log('click')
}
  render() {

    return (
      <div>
        <button style={{backgroundColor:'blue'}} type='button' onClick={this.handler}>{this.state.text}</button>
      </div>
    )
  }
}
export default Click