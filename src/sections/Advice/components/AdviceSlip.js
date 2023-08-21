export default function AdviceSlip(props) {
  const { adviceSlip, setRequestedNew, updateFaveSlips } = props

  return (
    <>
      <h3>Some Advice</h3>
      <p>{ adviceSlip.advice }</p>
      <button onClick={() => setRequestedNew(true)}>
        Get More Advice
      </button>
      <button onClick={updateFaveSlips}>
        Save to Favourites
      </button>
    </>
  )
}