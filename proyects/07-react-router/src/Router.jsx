import { EVENTS } from "./consts"
import { useState, useEffect } from "react"
import PropTypes from "prop-types"
import {match} from "path-to-regexp"

export function Router ({routes = [], defaultcomponent: DefaultComponent = () =><h1>404</h1> }){
    const [currentPath, setCurrentPath] = useState(window.location.pathname)
  
    useEffect(()=>{
      const onLocationchange = () => {
        setCurrentPath(window.location.pathname)
      }
  
      window.addEventListener(EVENTS.PUSHSTATE, onLocationchange)
      window.addEventListener(EVENTS.POPSTATE, onLocationchange)
  
      return ()=>{
        window.removeEventListener(EVENTS.PUSHSTATE, onLocationchange)
        window.removeEventListener(EVENTS.POPSTATE, onLocationchange)
      }
    }, [])
    let routeParams = {}
    
  
    const Page = routes.find(({path}) => {
      if (path === currentPath) return true

      // usando path-to-regexp
      // para poder detectar rutas dinamicas como /search/:query
     const matcherUrl =  match(path,{decode: decodeURIComponent} )
      const matched = matcherUrl(currentPath)
      if (!matched) return false

      // guardar los parámetros de la url que eran dinámicos
    // y que hemos extraído con path-to-regexp
    // por ejemplo, si la ruta es /search/:query
    // y la url es /search/javascript
     // matched.params.query === 'javascript'
      routeParams = matched.params // {qury: javascript} // search/javascript
      return true
    })?.component


    return Page ? <Page routeParams={routeParams} /> : <DefaultComponent />
  
  }

  Router.propTypes = {
    routes: PropTypes.arrayOf(
      PropTypes.shape({
        path: PropTypes.string.isRequired,
        component: PropTypes.func.isRequired,
      })
    ),
    defaultcomponent: PropTypes.func,
  };