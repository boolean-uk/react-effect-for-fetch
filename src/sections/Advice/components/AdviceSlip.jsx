export default function AdviceSlip({adviceData, adviceExists, obtainAdviceData, appendToSavedAdvice}) {
    return (
      <section className="advice-slip">
        <h3>Some Advice</h3>
        <p>{adviceData.advice}</p>
        <button onClick={obtainAdviceData}>Get More Advice</button>
        <button className={adviceExists ? "advice-exists" : null} onClick={appendToSavedAdvice}>{adviceExists ? "Saved!" : "Save to Favourties"}</button>
      </section>
    );
  }
  