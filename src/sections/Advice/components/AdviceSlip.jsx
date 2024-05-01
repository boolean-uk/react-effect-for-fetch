import { useEffect, useState } from "react"

export default function AdviceSlip(props) {
    const [advice, setAdvice] = useState("")

    function handleFavouritesClick(){
        console.log(props.favourites)
        props.setFavourites([...props.favourites, advice])
    }

    function handleUpdate() {
        fetch("https://api.adviceslip.com/advice")
        .then(response => response.json())
        .then(json => setAdvice(json.slip.advice))
    }
    
    
    useEffect(() => {
        handleUpdate()
    }, [])

    return (
        <section className="adivce-slip">
            <h3>Some Advice</h3>
            <p>{advice}</p>
            <button onClick={handleUpdate}>Get More Advice</button>
            <button onClick={handleFavouritesClick}>Save to Favourties</button>
        </section>
    )
}
