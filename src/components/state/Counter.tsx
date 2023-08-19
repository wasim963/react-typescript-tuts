import React, { useReducer } from 'react';

const initialState = {
    count: 0
}

type UpdateAction = {
    type: 'increment' | 'decrement',
    payload: number
}

type ResetAction = {
    type: 'reset'
}

// discriminated unions in typscript, and is recommended approach for type reducer in typescript
type ReducerAction = UpdateAction | ResetAction;

type ReducerState = {
    count: number
}

function reducer(state: ReducerState, action: ReducerAction) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + action.payload }
        case 'decrement':
            return { count: state.count - action.payload }
        case 'reset': 
            return initialState
        default:
            return state
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
  return (
      <div>
          Count: { state.count }
          <button onClick={() => {
              dispatch( { type: 'increment', payload: 10 } )
          }} >Increment 10</button>
          <button onClick={() => {
              dispatch( { type: 'decrement', payload: 10 } )
          }} >Decrement 10</button>
          <button onClick={() => {
              dispatch({ type: 'reset' })
          }} >Reset</button>
    </div>
  )
}

export default Counter