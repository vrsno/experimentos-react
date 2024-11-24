import './App.css'
import { useMovies } from './hooks/useMovies'
import { Movies } from "./components/Movies"



function App() {
const {movies: mappedMovies} = useMovies()


const handleSubmit = (e)=>{
  e.preventDefault()
  const { query } = Object.fromEntries(new window.FormData(e.target))
  console.log(query)
}

  return (
    <div className='page'>
      <header>
        <h1>Buscador de peliculas</h1> 
      <form className='form' onSubmit={handleSubmit}>
        <input name='query' type="text" placeholder='Avengers, Star War, The Matrix...'/>
        <button type='submit'>Buscar</button>
      </form>
      </header>

      <main>
       <Movies movies={mappedMovies} />
      </main>
    </div>


  )
}

export default App
