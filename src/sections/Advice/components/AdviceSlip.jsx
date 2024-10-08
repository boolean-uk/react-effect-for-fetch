import { useState } from "react"

export default function AdviceSlip({advice, fetchAdvice}){
    const [favorites, setFavorites] = useState([])

    if(!advice){
        return(
            <p>Loading...</p>
        )
    }

    function saveFavorite(){
        if(favorites.includes(advice.slip.advice)){
            return;
        }
        setFavorites([...favorites, advice.slip.advice])
    }
    
    return(
        <div>
            <p>{advice.slip.advice}</p>
            <button onClick={fetchAdvice}>New advice</button>
            <button onClick={saveFavorite}>Save</button>
            <h2>Favorites</h2>
            <ul>
                {favorites.map((favorite, index) => (
                    <li key={index}>{favorite}</li>
                ))}
            </ul>
        </div>
    )
    
}