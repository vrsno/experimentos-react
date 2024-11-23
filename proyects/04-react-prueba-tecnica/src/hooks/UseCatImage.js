import { useEffect, useState } from "react";
const CAT_PREFIX_IMAGE_URL = "https://cataas.com"
// custom hooks
// {imageUrl: "http://..."}
export function useCatImage( {fact}){
    const [imageUrl, setImageUrl] = useState(null);


  // para recuperar la imagen cada vez que tenemos una cita nueva
    useEffect(()=>{
      if (!fact) return
      const threeFirstWord = fact.split(" ", 3). join(" ")
      console.log(threeFirstWord)
      fetch(`https://cataas.com/cat/says/${threeFirstWord}?Size=50&Color=red&json=true`)
        .then(res => res.json())
        .then(response => {
          const { _id } = response
          const url = `/cat/${_id}/says/${threeFirstWord}`
          setImageUrl(url)
          
        })
    },[fact])
    
    return `${CAT_PREFIX_IMAGE_URL}${imageUrl}`
    
  }