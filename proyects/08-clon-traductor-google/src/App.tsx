import { useReducer } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';





function App() {
  const [{
    fromLanguage
  }, dispatch]= useReducer(reducer, initialState)

  console.log({ fromLanguage})

  return (
    <>
      <div className='App'>
        <h1>Google translate</h1>
        <button onClick={()=>{
          dispatch(({type: 'SET_FROM_LANGUAGE', payload: 'esPAÑOL'}))
        }}>
          Cambiar idioma
          
        </button>
        {fromLanguage}
      </div>
    </>
  )
}

export default App
