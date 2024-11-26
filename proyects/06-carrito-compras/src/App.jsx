import productsData from "./mocks/products.json"
import {Products} from "./componets/products"

function App() {
  const productsDatas = productsData.products
  return (
      <Products products={productsDatas} />
  )
}

export default App
