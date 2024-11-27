import { Header } from "./componets/Header"
import {products as initialProducts} from "./mocks/products.json"
import {Products} from "./componets/products"
import { useContext, useState} from "react"
import { Footer } from "./componets/Footer"
import { IS_DEVELOPMENT } from "./config"



function useFilters (){
  
// const [filters, setFilters] = useState (
//   {
//     category: "all",
//     minPrice: 0
//   })

const filters = useContext(FiltersContext)


const filterProducts = (products) =>{
  return products.filter(product =>{
    return (
      product.price > filters.minPrice &&
      (
        filters.category === "all" ||
        product.category === filters.category
      )
    )
  })
}
return {filters, filterProducts, setFilters}
}

function App() {
  const [products] = useState(initialProducts)
  // custom hooks
  const { filters, filterProducts, setFilters} =  useFilters()
  //llamda
  const filteredProducts = filterProducts(products)
  
  

  return (
      <>
      <Header changeFilters={setFilters} />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer filters={filters} />}

      </>
  )
}

export default App
