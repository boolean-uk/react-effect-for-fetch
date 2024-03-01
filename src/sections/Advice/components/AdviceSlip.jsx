import React from 'react'

function AdviceSlip({advice, getSlip, saveSlip}) {
  return (
    <section className="adivce-slip">
    <h3>Some Advice</h3>
    {advice ? (
        <>
          <p>{advice}</p>
          <button onClick={getSlip}>Get New Advice</button>
          <button onClick={saveSlip}>Save Advice</button>
        </>
      ) : (
        <p>Loading advice...</p>
      )}
  </section>
  )
}

export default AdviceSlip