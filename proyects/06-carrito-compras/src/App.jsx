import { Header } from "./componets/Header"
import {products as initialProducts} from "./mocks/products.json"
import {Products} from "./componets/Products"
import { Footer } from "./componets/Footer"
import { useFilters } from "./hooks/useFilters"
// import { IS_DEVELOPMENT } from "./config"
import { Cart } from "./componets/Cart"
import { CartProvider } from "./context/cart.jsx"



function App() {
  
  // custom hooks
  const { filterProducts} =  useFilters()
  //llamda
  const filteredProducts = filterProducts(initialProducts)
  
  

  return (
      <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      <Footer />
      </CartProvider>
  )
}

export default App
