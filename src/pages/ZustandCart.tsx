import Default from '../layouts/Default'
import useCartStore from '../stores/cart'


export default function ZustandProduct() {
  const cartStore = useCartStore();


  return (
    <Default>
      <button onClick={cartStore.getProducts}>get products</button>
      <ul>
        {cartStore.products?.map(product => (
          <li key={product.id} >
            {product.name}
            <button onClick={() => cartStore.addToCart(product)}>add to cart</button>
          </li>
        ))}
      </ul>

      <hr />
      <div className='border'>
        <p>Carts</p>
        <ol>
          {cartStore.carts?.map(product => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ol>
      </div>


    </Default>
  )
}
