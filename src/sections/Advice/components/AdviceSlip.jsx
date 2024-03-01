import { useState } from "react"

function AdviceSlip( {myFavourites, setMyFavourites} ) {
    //Creating a useState of an adivce object
    const [advice, setAdvice] = useState(null)

    //Fetching a random advice every time this function is called
    const getMoreAdvice = () => {
        fetch(`https://api.adviceslip.com/advice`)
          .then(response => response.json())
          .then(data => setAdvice(data.slip))
          .catch(error => console.error('Error fetching advice:', error));
    };
    //Adding the current advice to the favourites list
    const setToFavourites = () => {
        if(advice !== null){
            setMyFavourites([...myFavourites, advice])
            console.log(myFavourites)
        }
    }

    return(
        <section className="adivce-slip">
            <h3>Some Advice</h3>

            {advice !== null ? (
                //Printing the advice value of the advice object if it exists
                <p>{advice.advice}</p>
            ) : ( 
            <p>No adviced found</p>
            )}
            {/*Calling the functions on button click*/}
            <button onClick={getMoreAdvice}>Get More Advice</button>
            <button onClick={setToFavourites}>Save to Favourties</button>
      </section>
    )
}

export default AdviceSlip