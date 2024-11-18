import "./App.css"
import {TwitterFollowCard} from "./TwitterFollowCard" 
import { useState } from "react"

function App(){
    // const formatUsername = (username) => `@${username}`
    // const formattedUsername = (<span>@{username}</span>)
    const ladygaga = {username: "ladygaga"}
    const [name, setName] = useState("migelito")
return(
    <section className="App">
    {/* con nombre */}
    <TwitterFollowCard username={"elonmusk"}  name={"elon musk best"} />

    {/* sin nombres con la propiedad children */}
    <TwitterFollowCard  username={"billgates"}>
        Bill gates
    </TwitterFollowCard>

    {/* sin username para uasr desconocido por defecto */}
    <TwitterFollowCard >
        Barack Obama
    </TwitterFollowCard>

    {/* pasar todas las propiedades del objeto como prop. mala practica */}
    <TwitterFollowCard {...ladygaga}>
        ladygaga
    </TwitterFollowCard>

    {/* cambiar nombre */}
    <TwitterFollowCard username={name}>
        ejemplo
    </TwitterFollowCard>

    <button onClick={()=>{
        setName("predo")
    }}>
        cambiar nombre
    </button>

    </section>
 )
}

export default App