import React from 'react'

function AdviceSlip({adviceData, setAdviceData, favouriteAdvice, setFavouriteAdvice}) {
    
    function updateAdvice() {
        fetch(`https://api.adviceslip.com/advice`)
            .then(res => res.json())
            .then(setAdviceData)
    }

    function saveAdvice(){
        setFavouriteAdvice([...favouriteAdvice, {adviceData}])
        console.log(favouriteAdvice)
    }
  return (
    <>
        <h3>Some Advice</h3>
        <p>{adviceData.slip.advice}</p>
        <button onClick={updateAdvice}>Get More Advice</button>
        <button onClick={saveAdvice}>Save to Favourties</button>
    </>
  )
}

export default AdviceSlip