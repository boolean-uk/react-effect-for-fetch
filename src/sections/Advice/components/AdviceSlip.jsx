import { useEffect, useState } from "react"

export default function AdviceSlip(props) {
    const [advice, setAdvice] = useState("")


    
    
    useEffect(() => {
        fetch("https://api.adviceslip.com/advice")
        .then(response => response.json())
        .then(json => setAdvice(json.slip.advice))
    }, [])

    return (
        <section className="adivce-slip">
            <h3>Some Advice</h3>
            <p>{advice}</p>
            <button>Get More Advice</button>
            <button>Save to Favourties</button>
        </section>
    )
}
