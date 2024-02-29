function AdviceSlip(props) {
    return ( 
      <section className="adivce-slip">
      <h3>Some Advice</h3>
      <p>{props.advice.slip !== undefined ? props.advice.slip.advice : "loading..."}</p>
      <button onClick={props.nextAdvice}>Get More Advice</button>
      <button onClick={props.saveFavorites}>Save to Favourites</button>
    </section>
  )
}

export default AdviceSlip