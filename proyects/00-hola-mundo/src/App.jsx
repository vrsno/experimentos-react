import "./App.css"
import {TwitterFollowCard} from "./TwitterFollowCard" 
import { useState } from "react"

function App(){
    // const formatUsername = (username) => `@${username}`
    // const formattedUsername = (<span>@{username}</span>)
    const ladygaga = {username: "ladygaga"}
    const [name, setName] = useState("migelito");
    const users =[
       {
        username: "donald",
        name: "juan",
        isFollowing: false
       },
       {
        username: "pacoHdezs",
        name: "pablo hernadez",
        isFollowing: true
       },
       {
        username: "Thchein",
        name: "Tamario",
        isFollowing: false
       }
    ]
return(
    <section className="App">

    {/* renderizando componentes */}
    <h1>rendizados</h1>
    {
        users.map(({username, name, isFollowing}) =>(
            <TwitterFollowCard
            key={username}
            username={username}
            initialIsFollowing={isFollowing}>
            {name}
            </TwitterFollowCard>
        ))


    }
    <h2>pruebas con y sin propiedades</h2>
    {/* con nombre */}
    <TwitterFollowCard username={"elonmusk"}  name={"elon musk best"} initialIsFollowing={true} />

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

    <h2>cambiar nombre</h2>

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