import {Link} from "../Link"


export default function HomePage(){
    return(
      <>
      <h1>Home</h1>
      <p>pagina de ejemplo para crear react router desde cero</p>
      <Link to={"/about"} >Sobre Nosotros</Link>
      </>
    )
  }