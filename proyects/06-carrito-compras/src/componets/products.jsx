import './Products.css'
import { AddToCartIcon } from './icons.jsx'
import PropTypes from 'prop-types';

export function Products ({ products }){
    console.log(products)
    if (!Array.isArray(products) || products.length === 0) {
        return <p>No products available</p>;
      }
    return (
        <main className="products">
          <ul>
            {products.slice(0, 10).map((product) => (
              <li key={product.id}>
                <img src={product.thumbnail} alt={product.title} />
                <div>
                  <strong>{product.title}</strong> - ${product.price}
                </div>
                <div>
                  <button>
                    <AddToCartIcon />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </main>
      );
    
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