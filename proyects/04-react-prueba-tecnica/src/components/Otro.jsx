import { useCatImage } from "../hooks/UseCatImage"

export function Otro() {
     const imageUrl = useCatImage({fact: "random fact uwu"})
     return (
        <>
        {imageUrl && <img src={imageUrl}></img>}
        </>
     )
}