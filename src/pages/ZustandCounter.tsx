import Default from '../layouts/Default'
import useCounter from '../stores/counter'


export default function Zustand() {
  const counter = useCounter();

  return (
    <Default>
      <div className='border'>
        <h1>count: {counter.count}</h1>
        <button onClick={counter.increase}>increase (+1)</button>
        <button onClick={counter.decrease}>decrease (-1)</button>
      </div>
    </Default>
  )
}
