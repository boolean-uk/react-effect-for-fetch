import { useEffect, useState } from 'react'

function AdviceSlip({MakeFavourite}) {
    const [advice, setAdvice] = useState('')
     
     const fetchAdvice = () => {
        fetch('https://api.adviceslip.com/advice')
        .then((response) => response.json())
        .then((data) => setAdvice(data.slip.advice))
        .catch((err) => console.error('ERROR! Could not read url', err))
    }

    useEffect(() => {
        fetchAdvice()
    }, [])

    return (
        <div className='advice-slip'>
            <p>{advice}</p>
            <button onClick={fetchAdvice}>Get Another Piece Of Advice</button>
            <button onClick={() => MakeFavourite(advice)}>Add Advice To Favourites</button>
        </div>
    )
}export default AdviceSlip