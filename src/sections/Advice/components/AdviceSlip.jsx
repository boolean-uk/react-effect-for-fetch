import React from 'react'

function AdviceSlip({slip, addToFavorites, fetchSlip}) {
    
  return (
    <section class="adivce-slip">
        <h3>Some Advice</h3>
        <p>{slip === undefined ? "" : slip.slip.advice}</p>
        <button onClick={()=>fetchSlip()}>Get More Advice</button>
        <button onClick={()=>addToFavorites()}>Save to Favourties</button>
    </section>
  )
}

export default AdviceSlip