import {Link} from '../Link'

export default function AboutPage(){
    return(
      <>
      <h1>About</h1>
      <div>
        <img src="https://images.unsplash.com/photo-1640951613773-54706e06851d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="unplash user image" />
        <p>Hola, me llamo Miguel y estoy creando un clon de React Router.</p>
      </div>
      <Link to={"/"}>Ir a home</Link>
      
      </>
    )
  }