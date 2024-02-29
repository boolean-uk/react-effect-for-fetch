import React from 'react';

// AdviceSlip component to render individual advice slips
const AdviceSlip = ({ advice, handleSave, newAdvice }) => {

  return (
    <section className="advice-slip">
      <h3>Some Advice</h3>
      <p>{advice}</p>
      <button onClick={handleSave}>Save to Favourites</button>
      <button onClick={newAdvice}>Show another advice</button>
    </section>
  );
};

export default AdviceSlip;
