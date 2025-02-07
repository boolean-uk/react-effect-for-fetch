import React from 'react'

function AdviceSlip({advice_string, updateAdviceSlip, addFavorites}) {
  return (
    <>
        <h3>Some Advice</h3>
        <p>{advice_string}</p>
        <button onClick={updateAdviceSlip}>Get More Advice</button>
        <button onClick={addFavorites}>⭐</button>
    </>
  )
}

export default AdviceSlip