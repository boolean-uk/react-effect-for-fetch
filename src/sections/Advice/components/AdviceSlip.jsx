import React from 'react';

function AdviceSlip({ advice, fetchAdvice, addToFavorites }) {
  return (
    <section className="advice-slip">
      <h3>Some Advice</h3>
      <p>{advice}</p>
      <button onClick={fetchAdvice}>Get More Advice</button>
      <button onClick={addToFavorites}>Save to Favorites</button>
    </section>
  );
}

export default AdviceSlip;
