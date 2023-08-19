import { Component } from 'react';

// type props
type CounterProps = {
    message: string
}

// type state
type CounterState = {
    count: number
}

export class Counter extends Component<CounterProps, CounterState> {
    
    state = {
        count: 0
    }
    
    handleClick = () => {
        this.setState( ( prevState ) => ( { count: prevState.count + 1 } ) )
    }
    
  render() {
    return (
        <div>
            <button onClick={this.handleClick} >Increment</button>
            <div>{this.props.message} { this.state.count }</div>
      </div>
    )
  }
}

export default Counter