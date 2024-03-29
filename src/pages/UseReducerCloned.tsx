import React, { useReducer } from 'react'
import { reducer } from './UseReducer'
import Default from '../layouts/Default'
import useCount from '../hooks/useCount'

export default function UseReducerCloned() {
  const { count: initCount } = useCount()

  const [state, dispatch] = useReducer(reducer, {
    count: initCount
  })
  return (
    <Default>
      {/* won't same with '/use-reducer' even using custom hook 'useCount' */}
      <div>
        {state.count}
        <button className='mb-2' onClick={() => dispatch({ type: 'increment' })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
      </div>
    </Default>
  )
}
