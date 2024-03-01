import React, { useEffect, useState } from 'react'

export default function AdviceSlip({favouriteList, setFavouriteList}) {
  const [advice, setAdvice] = useState(null);

    // cacheBuster makes it so that the browser doesn't cache the response
    const cacheBuster = Math.random();

  const handleGetAdvice = () => {
    fetch(`https://api.adviceslip.com/advice?cache=${cacheBuster}`)
      .then(response => response.json())
      .then(data => { setAdvice(data); console.log(data) })
      .catch(error => {
        console.error('Error fetching advice:', error);
      });
    }

  const handleSetFavourite = () => {
    if (advice !== null) {
      setFavouriteList([...favouriteList, advice.slip.advice]);
    }
  }

  return (
    <>
      <h2>Advice Section</h2>
      <section className="adivce-slip">
        <h3>Some Advice</h3>
        {advice !== null ? (
          <p>{advice.slip.advice}</p>
        ) : (
          <p>No advice here...</p>
        )}
        <button onClick={handleGetAdvice}>Get More Advice</button>
        <button onClick={handleSetFavourite}>Save to Favourties</button>
      </section>
    </>
  )
}
