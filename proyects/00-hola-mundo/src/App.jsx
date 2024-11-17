import "./App.css"
import {TwitterFollowCard} from "./TwitterFollowCard" 

function App(){
return(
    <section className="App">
    <TwitterFollowCard username={"elonmusk"} name={"elon musk best"} />
    <TwitterFollowCard username={"jack"} name={"jack hanma jujira"} />
    </section>
 )
}

export default App