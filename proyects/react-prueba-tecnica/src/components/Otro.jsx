import { useCatImage } from "../hooks/UseCatImage"

export function Otro() {
     const imageUrl = useCatImage({fact: "random fact"})
     return (
        <>
        {imageUrl && <img src={imageUrl}></img>}
        </>
     )
}