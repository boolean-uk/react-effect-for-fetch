import React from "react";
import { useState, props, useEffect } from "react";

function AdviceSlip({ savedAdvice, setSavedAdvice }) {
  const [data, setData] = useState({
    slip: {
      advice: "when loading fails, load again",
    },
  });

  //   useEffect(() => {
  //     console.log("USEEFFECT", data);
  //   }, [data]);

  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then(setData);
  }, []);

  const newAdvice = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then(setData);
  };
  const saveAdvice = () => {
    if(!savedAdvice.includes(data.slip.advice)){
      setSavedAdvice([...savedAdvice, data.slip.advice])
    }
  };

  return (
    <section className="adivce-slip">
      <h3>Some Advice</h3>
      <p>{data.slip.advice}</p>
      <button onClick={newAdvice}>Get More Advice</button>
      <button
        onClick={() => saveAdvice()}
      >
        Save to Favourties
      </button>
    </section>
  );
}

export default AdviceSlip;
