function AdviceSlip({ adviceData, updateAdvice, saveAdvice }) {
  return (
    <>
      <h3>Some Advice</h3>
      <p>{adviceData.slip.advice}</p>
      <button onClick={() => updateAdvice()}>Get more advice</button>
      <button onClick={() => saveAdvice()}>Save to Favourties</button>
    </>
  );
}

export default AdviceSlip;
