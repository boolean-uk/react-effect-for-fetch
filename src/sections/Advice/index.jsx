import React, { useState, useEffect } from 'react';

function AdviceSection() {
  const [advice, setAdvice] = useState([]); 
  const renderAdvice = () => {
    fetch('https://api.adviceslip.com/advice')
      .then((response) => response.json())
      .then((data) => setAdvice([data.slip])); 
  };

  useEffect(() => {
    renderAdvice();
  }, []);

  return (
    <section>
        <h2>Advice Section</h2>
        {advice.map((adviceItem) => (
          <section className="advice-slip" key={adviceItem.id}>
            <h3>Some Advice</h3>
            <p>{adviceItem.advice}</p>
            <button onClick={renderAdvice}>Get More Advice</button>
            <button>Save to Favorites</button>
          </section>
        ))}
    </section>
  );
}

export default AdviceSection;
