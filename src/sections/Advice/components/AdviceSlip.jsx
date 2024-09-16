function AdviceSlipComponent({ advice }) {

    return (
        <section className="adivce-slip">
          <h3>Some Advice</h3>
          <p>{advice?.slip?.advice}</p>
          <button>Get More Advice</button>
          <button>Save to Favourties</button>
        </section>
    )
}

export default AdviceSlipComponent