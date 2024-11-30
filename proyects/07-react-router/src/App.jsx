import './App.css'
import { lazy, Suspense } from 'react'



import { Router } from './Router'
import Page404 from './pages/404.jsx'
import SearchPage from './pages/Search.jsx'
import { Route } from './route.jsx'


// hasta que no lo necesita nop carga
const LazyHomePage = lazy(()=> import(('./pages/Home.jsx')))
const LazyAboutPage = lazy(() => import('./pages/About.jsx'))

const appRoutes = [
  {
    // query es dinamica porque no sabemos cual es su valor
    path: "/search/:query",
    component: SearchPage
  }
]


function App() {

  return (
    <main>
      <Suspense fallback={<div>Loading.....</div>}>
      <Router routes={appRoutes} defaultcomponent={Page404}>
        <Route path="/" component={LazyHomePage} />
        <Route path="/about" component={LazyAboutPage} />
      </Router>
      </Suspense>
    </main>
  )

}

export default App
