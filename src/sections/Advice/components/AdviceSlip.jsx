
function AdviceSlip(props) {
  
  console.log(props.adviceObject.slip.advice)

  return (
    <>
      <h3>advice</h3>
      <p>{props.adviceObject.slip.advice}</p>
      <button onClick={() => props.fetchAdvice()}>New Advice</button>
      <button onClick={() => props.saveToFavourites()}>Favourite</button>
    </>
  )
}

export default AdviceSlip