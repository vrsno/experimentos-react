import './Products.css'
import PropTypes from 'prop-types';
import { useCart } from '../hooks/useCart.js';
import { AddToCartIcon, RemoveFromCartIcon } from './icons.jsx';

export function Products ({ products }){
    const {addToCart, cart, removeFromCart} = useCart()
  const checkProductInCart = product =>{
    return cart.some(item => item.id === product.id)
  }

    if (!Array.isArray(products) || products.length === 0) {
        return <p>No products available</p>;
      }
      return (
        <main className='products'>
          <ul>
            {products.slice(0, 10).map(product => {
              const isProductInCart = checkProductInCart(product)
    
              return (
                <li key={product.id}>
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                  />
                  <div>
                    <strong>{product.title}</strong> - ${product.price}
                  </div>
                  <div>
                    <button
                      style={{ backgroundColor: isProductInCart ? 'red' : '#09f' }} onClick={() => {
                        isProductInCart
                          ? removeFromCart(product)
                          : addToCart(product)
                      }}
                    >
                      {
                        isProductInCart
                          ? <RemoveFromCartIcon />
                          : <AddToCartIcon />
                      }
                    </button>
                  </div>
                </li>
              )
            })}
          </ul>
        </main>
      )
}

Products.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      thumbnail: PropTypes.string.isRequired,
    })
  ).isRequired,
};