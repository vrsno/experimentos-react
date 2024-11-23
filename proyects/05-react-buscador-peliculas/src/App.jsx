import './App.css'
import responseMovies from './mocks/with-results.json'
import { Movies } from "./components/Movies"

function App() {
 const movies = responseMovies.Search



  return (
    <div className='page'>
      <header>
        <h1>Buscador de peliculas</h1>
      <form className='form'>
        <input type="text" placeholder='Avengers, Star War, The Matrix...'/>
        <button type='submit'>Buscar</button>
      </form>
      </header>

      <main>
       <Movies movies={movies}/>
      </main>
    </div>


  )
}

export default App
