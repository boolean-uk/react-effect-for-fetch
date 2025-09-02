
function AdviceSlip({newadvice, fetchNewAdvice, saveToFavourites}) {
  return (
    <>
        <h2>Advice Section</h2>
        <section className="adivce-slip">
            <h3>Advice #{newadvice.slip.id}</h3>
            <p>{newadvice.slip.advice}</p>
            <button onClick={fetchNewAdvice}>Get More Advice</button>
            <button onClick={saveToFavourites}>Save to Favourties</button>
      </section>
    </>
  )
}

export default AdviceSlip