import {useState, useEffect} from 'react';

function Advice({handleCreateFavorite}) {

    const [advice, setAdvice] = useState();
    

    const getNewAdvice = () => {
        fetch(`https://api.adviceslip.com/advice`)
        .then(res => res.json())
        .then(data => setAdvice(data.slip))}


    useEffect(() => {
        fetch(`https://api.adviceslip.com/advice`)
        .then(res => res.json())
        .then(data =>setAdvice(data.slip))
    }, [])

    return(
        <>
        <p>{advice?.advice}</p>
        <button onClick={getNewAdvice}>Get More Advice</button>
        <button onClick={() => handleCreateFavorite(advice)}>Save to Favourites</button>
        </>
    )

}
export default Advice;