import { useReducer } from 'react'
import Default from '../layouts/Default'
import useCount from '../hooks/useCount'

interface State {
  count: number
}
interface Action {
  type: 'increment' | 'decrement'
}
// eslint-disable-next-line react-refresh/only-export-components
export function reducer(state: State, action: Action) {
  const { type } = action

  switch (type) {
    case 'increment':
      return {
        ...state,
        count: state.count + 1
      }

    case 'decrement':
      return {
        ...state,
        count: state.count - 1
      }
    default:
      return state
  }
}
export default function UseReducer() {
  const { count: initCount } = useCount()
  const [state, dispatch] = useReducer(reducer, {
    count: initCount
  })
  return (
    <Default>
      <div>
        <div>Count: {state.count}</div>
        <button className='mb-2' onClick={() => dispatch({ type: 'increment' })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
      </div>
    </Default>
  )
}
