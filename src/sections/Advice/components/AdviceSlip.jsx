import { useEffect, useState } from "react"
import { render } from "react-dom"

export default function AdviceSlip(props) {
    const [advice, setAdvice] = useState("")

    function handleFavouritesClick(){
        console.log(props.favourites)
        props.setFavourites([...props.favourites, advice])
    }

    function handleUpdateClick() {
        fetch("https://api.adviceslip.com/advice")
        .then(response => response.json())
        .then(json => setAdvice(json.slip.advice))
    }
    
    
    useEffect(() => {
        handleUpdateClick()
    }, [])

    return (
        <section className="adivce-slip">
            <h3>Some Advice</h3>
            <p>{advice}</p>
            <button onClick={handleUpdateClick}>Get More Advice</button>
            <button onClick={handleFavouritesClick}>Save to Favourties</button>
        </section>
    )
}
