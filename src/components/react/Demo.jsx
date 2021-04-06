import React from "react"

class Demo extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        count: 0
      }
    }
  
    // change code below this line
  
    increment() {
      this.setState({
        count: this.state.count + 1
      })
    }
    
    decrement() {
      this.setState({
        count: this.state.count - 1
      })
    }
  
    reset() {
      this.setState({
        count: 0
      })
    }
  
    // change code above this line
    render() {
      return (
  
     <div>
     <button className='inc' onClick={(e) => this.increment(e)}>Increment!</button>
      <button className='dec' onClick={(e) => this.decrement(e)}>Decrement!</button>
      <button className='reset' onClick={(e) => this.reset(e)}>Reset</button>
      <h1>Current Count: {this.state.count}</h1>
    </div>
      )
    }
  }
  
  export default Demo
