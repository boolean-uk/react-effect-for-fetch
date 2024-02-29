import { useEffect, useState } from "react"

export default function AdviceSlipComponent(props) {
    const apiURL = "https://api.adviceslip.com"
    const [advice, setAdvice] = useState({ slip: { advice: "" } })
    const { favourites, setFavourites } = props

    const getAdvice = () => {
        fetch(`${apiURL}/advice`)
            .then(response => response.json())
            .then(data => setAdvice(data))
    }

    useEffect(() => {
        getAdvice()
    }, [])

    const addFavourite = () => {
        setFavourites(
            [...favourites, advice.slip.advice]
        )
    }


    return (
        <section className="advice-slip">
            <h3>Some Advice</h3>
            <p>{advice.slip.advice}</p>
            <button onClick={getAdvice}>Get More Advice</button>
            <button onClick={addFavourite}>Save to Favourties</button>
        </section>
    )
}