import './App.css'
import { useMovies } from './hooks/useMovies'
import { Movies } from "./components/Movies"
import { useEffect, useRef, useState } from 'react'
import debounce from 'just-debounce-it'

function UseSearch (){
  const  [ search, updateSearch ]= useState("")
  const [error, setError] = useState(null)
  const isFirstinput = useRef(true)

  useEffect(()=>{
    if(isFirstinput.current){
      isFirstinput.current = search === ''
      return // este useref sirve para validar el search al principio pero se muestra despues
      //ya que no se renderiza
    }


    if (search === ''){
      setError("no valido")
      return
    }
  
    if (search.match(/^\d+$/)) {
      setError('No se puede buscar una película con un número');
      return;
    }
  
    if (search.length < 3){
      setError('la busqueda debe tener al menos 3 caracteres')
      return
    }
  
    setError(null)
  }, [search])

  return {search, updateSearch, error}
}

function App() {
  const [sort, setSort] = useState(false)

const {search, updateSearch, error} = UseSearch()
const {movies, loading, getMovies} = useMovies({search, sort})

// solo importar usecallback para que funcione
// const debouncedgetMovies = useCallback(
//   debounce(search =>{
//   console.log(search)
//   getMovies({search})
// }, 300),[getMovies])

const debouncedgetMovies = 
  debounce(search =>{
  console.log(search)
  getMovies({search})
}, 300)

const handleSubmit = (e)=>{
  e.preventDefault()
  getMovies({search})
}

const handleSort = ()=>{
  setSort(!sort)
}
const handleChange = (e)=>{

  const newQuery = e.target.value
  if(newQuery.startsWith(" ")) return

    // cada vez que detecta un cambio en el inpur hace la busqueda
  const newSearch = e.target.value
  updateSearch(newSearch)
  debouncedgetMovies(newSearch)
}



  return (
    <div className='page'>
      <header>
        <h1>Buscador de peliculas</h1>
      <form className='form' onSubmit={handleSubmit}>
        <input onChange={handleChange} value={search} type="text" placeholder='Avengers, Star War, The Matrix...'/>
        <input type="checkbox" onChange={handleSort} checked={sort} />
        <button type='submit'>Buscar</button>
      </form>
      { error && <p style={{color: "red"}} >{error}</p>}
      </header>

      <main>
       {
        loading ? <p>Cargando...</p>: <Movies movies={movies} />
       }
      </main>
    </div>


  )
}

export default App
