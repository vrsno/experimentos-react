import "./App.css"
import { useCatImage } from "./hooks/UseCatImage";
import { useCatFact } from "./hooks/usecatFact";
import { Otro } from "./components/Otro";

//const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red&json=true`


function App() {
  const {fact, refreshRandomFact} = useCatFact()
  const imageUrl = useCatImage({fact})

const handleClick = async ()=>{
  refreshRandomFact()
  }

  return (
    <main>
      <h1>app de gatitoss</h1>
      <button onClick={handleClick}>Get new fact</button>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt={`Image using the first three words for ${fact}`} />}

      <Otro ></Otro>
    </main>
  )
}

export default App
