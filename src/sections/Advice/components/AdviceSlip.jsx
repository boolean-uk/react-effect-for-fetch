export default function AdviceSlip({ random, setSaveRandom, handleClick }) {
    return (
        <section key={random.slip.id} className="adivce-slip">
            <h3>Some Advice</h3>
            <p>{random.slip.advice}</p>
            <button onClick={handleClick}>Get More Advice</button>
            <button onClick={() => {setSaveRandom(random.slip.advice)}}>Save to Favourties</button>
        </section>
    )
}