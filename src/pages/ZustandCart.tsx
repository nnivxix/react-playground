import Default from '../layouts/Default'
import useCartStore, { Item } from '../stores/cart'


export default function ZustandProduct() {
  const cartStore = useCartStore();

  const calculatedCarts = () => {
    const productMap = new Map<string, Item>();

    cartStore.carts?.forEach((p) => {
      const existingProduct = productMap.get(p.id);
      if (existingProduct) {
        existingProduct.quantity = (existingProduct.quantity || 1) + 1;
      } else {
        productMap.set(p.id, { ...p });
      }
    });

    return Array.from(productMap.values());
  }


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
          {calculatedCarts()?.map(product => (
            <li key={product.id}>{product.name} ({product.quantity ?? 1})</li>
          ))}
        </ol>
      </div>


    </Default>
  )
}
