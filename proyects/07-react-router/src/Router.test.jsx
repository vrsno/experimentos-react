import { describe, it, expect, beforeEach, vi } from 'vitest'
import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import "@testing-library/user-event"
import { Router } from './components/Router.jsx'
import { Route } from './components/Route.jsx'
import { Link } from './components/Link.jsx'
import { getCurrentPath } from './utils/getCurrentPath.js'

vi.mock('./utils/getCurrentPath.js', () => ({
  getCurrentPath: vi.fn()
}))

describe('Router', () => {
  beforeEach(() => {
    cleanup()
    vi.clearAllMocks()
  })

  it('should render without problems', () => {
    render(<Router routes={[]} />)
    expect(true).toBeTruthy()
  })

  it('should render 404 if no routes match', () => {
    render(<Router routes={[]} defaultComponent={() => <h1>404</h1>} />)
    expect(screen.getByText('404')).toBeTruthy()
  })

  it('should render the component of the first route that matches', () => {
    getCurrentPath.mockReturnValue('/about')

    const routes = [
      {
        path: '/',
        component: () => <h1>Home</h1>
      },
      {
        path: '/about',
        component: () => <h1>About</h1>
      }
    ]

    render(<Router routes={routes} />)
    expect(screen.getByText('About')).toBeTruthy()
  })

  it('should navigate using Links', async () => {
    getCurrentPath.mockReturnValueOnce('/')

    render(
      <Router>
        <Route
          path='/' Component={() => {
            return (
              <>
                <h1>Home</h1>
                <Link to='/about'>Go to About</Link>
              </>
            )
          }}
        />
        <Route path='/about' Component={() => <h1>About</h1>} />
      </Router>
    )

     // Esperar hasta que el enlace sea renderizado
     const anchor =  screen.getByText(/Go to About/);
     // Usamos userEvent para hacer el clic
     userEvent.click(anchor);
 
     // Esperar hasta que se renderice el componente "About"
     const aboutTitle = await screen.findByText('About');
 
     // Verificar que el nuevo contenido de la ruta se renderice
     expect(aboutTitle).toBeInTheDocument();
  })
})
