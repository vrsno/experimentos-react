import { useState, useEffect } from "react";
import { getRandomFact } from "../Facts";

export function useCatFact(){
    const [fact, setFact] = useState(null);
    const refreshRandomFact = ()=>{
      getRandomFact().then(newFact =>setFact(newFact))
    }
    // un efecto para recuperar la cita al cargar la pagina
    useEffect(()=>{
      refreshRandomFact
   }, [])
  
   return { fact, refreshRandomFact}
  }