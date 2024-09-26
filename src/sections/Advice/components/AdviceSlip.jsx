function AdviceSlip(props) {
    const { slip, newAdvice, addFavAdvice } = props;

    const addSlipToFav = () => {
        addFavAdvice(slip)
    }

    return (
      <section className="advice-slip">
        <h3>Some Advice</h3>
        <p>{slip.advice}</p>
        <button onClick={newAdvice}>Get More Advice</button>
        <button onClick={addSlipToFav}>Save to Favourites</button>
      </section>
    );
}

export default AdviceSlip