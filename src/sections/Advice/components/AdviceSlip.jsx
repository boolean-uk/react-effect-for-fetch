function AdviceSlip({ advice, adviceURL, setAdvice, faveAdvice, setFaveAdvice }) {

  function getMoreAdvice() {
    fetch(adviceURL)
      .then(res => res.json())
      .then(data => setAdvice(data.slip.advice))
  }

  function saveToFavourites() {
    if (!faveAdvice.includes(advice)) {
      setFaveAdvice([...faveAdvice, advice])
    }
    console.log(faveAdvice)
  }

    return (
        <section className="advice-slip">
            <h3>Some Advice</h3>
            <p>{advice}</p>
            <button onClick={getMoreAdvice}>Get More Advice</button>
            <button onClick={saveToFavourites}>Save to Favourties</button>
        </section>
    )
}

export default AdviceSlip