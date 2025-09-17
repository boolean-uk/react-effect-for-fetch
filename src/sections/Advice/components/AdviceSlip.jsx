
export default function AdviceSlip({ adviceInfo }) {

  return (
    <section className="adivce-slip">

      <h3>Some Advice</h3>
      {adviceInfo && <p>{adviceInfo.slip.advice}</p>}

    </section>
  )
}