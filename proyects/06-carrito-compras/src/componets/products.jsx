import './Products.css'
import { AddToCartIcon } from './icons.jsx'


export function Products ({ products }){
    console.log(products)
    if (!Array.isArray(products) || products.length === 0) {
        return <p>No products available</p>;
      }
    return (
        <main className="products">
          <ul>
            {products.map((product) => (
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

