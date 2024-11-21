import { useEffect, useState } from "react"

function App() {
  const FollowMouse = ()=>{
    return (
      <main>
      <div style={{
          position: 'absolute',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          border: '1px solid #fff',
          borderRadius: '50%',
          opacity: 0.8,
          pointerEvents: 'none',
          left: -25,
          top: -25,
          width: 50,
          height: 50,
          transform: `translate(${position.x}px, ${position.y}px)`
        }}
        />
      <button onClick={()=> setEnabled(!enabled)}>
        {enabled ? "Desactivar" : "Activar"} seguidor
        </button>
      </main>
    )
  }

  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({x: 0, y: 0});
  useEffect(()=>{
    console.log("effect", {enabled});

    const handleMove = (event)=>{
      const { clientX, clientY } = event;
      console.log("handlemove", clientX, clientY);
      setPosition({x: clientX, y: clientY});
    }

   if(enabled){
    window.addEventListener("pointermove", handleMove);
   } 
    // clean cuando el componente se desmonta
   return ()=> {
    window.removeEventListener("pointermove", handleMove)
    console.log("cleanup")
   };
  }, [enabled])

  const [mounted, setMounted] = useState(true)

  return (
   <>
   {mounted && <FollowMouse />}
   <button onClick={()=> setMounted(!mounted)}>Toggle mounted Follow mouse</button>
   </>
  )
}

export default App
