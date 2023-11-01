function AdviceSlip(props) {
    return <section className="advice-slip">
      <h3>Some Advice</h3>
      <p>{props.Advice}</p>
      <button onClick={props.getmoreAdvice}>Get More Advice</button>
      <button onClick={props.addFavourite}>Save to Favourites</button>
      </section>
}

export default AdviceSlip