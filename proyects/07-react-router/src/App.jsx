import './App.css'
import HomePage from "./pages/Home"
import AboutPage from "./pages/About.jsx"

import { Router } from './Router'
import Page404 from './pages/404.jsx'
import SearchPage from './pages/Search.jsx'

const appRoutes = [
  {
    path: "/",
    component: HomePage
  },
  {
    path: "/about",
    component: AboutPage
  },
  {
    // query es dinamica porque no sabemos cual es su valor
    path: "/search/:query",
    component: SearchPage
  }
]


function App() {

  return (
    <main>
      <Router routes={appRoutes} defaultcomponent={Page404} />
    </main>
  )

}

export default App
