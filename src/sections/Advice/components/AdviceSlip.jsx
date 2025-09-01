const AdviceSection = ({advice, getMore, save}) => {
    return (
      <section className="adivce-slip">
        <h3>Some Advice</h3>
        <p>{advice}</p>
        <button onClick={getMore}>Get More Advice</button>
        <button onClick={save}>Save to Favourties</button>
      </section>
    )
}

export default AdviceSection