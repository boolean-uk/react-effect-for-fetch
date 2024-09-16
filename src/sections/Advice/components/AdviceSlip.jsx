import { useState, useEffect } from 'react'

const AdviceSlip = ({advice, retrieveAdvice, saveAdvice}) => {
    const [currentAdvice, setCurrentAdvice] = useState(advice)
    
    useEffect(() => {
        setCurrentAdvice(advice)
    }, [advice])

    return (
        <section className="adivce-slip">
            <h3>Some Advice</h3>
            <p>{currentAdvice?.advice}</p>
            <button onClick={() => retrieveAdvice()}>Get More Advice</button>
            <button onClick={() => saveAdvice(currentAdvice.id)}>Save to Favorites</button>
        </section>
    )
}

export default AdviceSlip