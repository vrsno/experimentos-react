import { EVENTS } from "../consts.js"
import { useState, useEffect } from "react"
import PropTypes from "prop-types"
import {match} from "path-to-regexp"
import React from "react"
import {getCurrentPath} from "../utils/getCurrentPath.js"

export function Router ({children ,routes = [], defaultcomponent: DefaultComponent = () =><h1>404</h1> }){
    const [currentPath, setCurrentPath] = useState(getCurrentPath)
  
    useEffect(()=>{
      const onLocationchange = () => {
        setCurrentPath(getCurrentPath())
      }
  
      window.addEventListener(EVENTS.PUSHSTATE, onLocationchange)
      window.addEventListener(EVENTS.POPSTATE, onLocationchange)
  
      return ()=>{
        window.removeEventListener(EVENTS.PUSHSTATE, onLocationchange)
        window.removeEventListener(EVENTS.POPSTATE, onLocationchange)
      }
    }, [])
    let routeParams = {}

    // add routes from children componet
    const routesFromChildren = React.Children.map(children, (child) => {
      if (child && child.type) {
        const { name } = child.type;
        const isRoute = name === 'Route';
  
        // Si es un componente de tipo 'Route', extraemos las props
        return isRoute ? child.props : null;
      }
      return null; // Si no es un 'Route', devolvemos null
    });
    
    const routesToUse = routes.concat(routesFromChildren).filter(Boolean)
    
  
    const Page = routesToUse.find(({path}) => {
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