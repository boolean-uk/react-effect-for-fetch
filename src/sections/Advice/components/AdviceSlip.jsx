function AdviceSlip({ slip, onSave }) {
  if (!slip) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <p>{slip.advice}</p>
      <button onClick={onSave}>Save to Favourites</button>
    </div>
  );
}

export default AdviceSlip;
