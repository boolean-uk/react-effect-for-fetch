import { useState, useEffect } from "react";
import AdviceSlip from "./components/AdviceSlip";
import FavouriteAdviceSlip from "./components/FavouriteSlipsList";

function AdviceSection() {
  const [adviceData, setAdviceData] = useState("");
  const [savedAdvice, setSavedAdvice] = useState([]);

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function getAdvice() {
    // https://api.adviceslip.com/advice/ is supposed to return a random adv
    // but doesnt for some reason, so this workaround forces a random advice
    const rInt = getRandomInt(200);
    const url = "https://api.adviceslip.com/advice/" + rInt;

    fetch(url)
      .then((res) => res.json())

      .then((data) => {
        console.log("Recieved advice: ", data);
        setAdviceData(data);
      });
  }

  function saveAdvice() {
    setSavedAdvice([...savedAdvice, adviceData]);
    getAdvice();
  }

  useEffect(() => getAdvice(), []);
  console.log(savedAdvice);
  return (
    <section>
      <h2>Advice Section</h2>
      <section className="adivce-slip">
        {adviceData && (
          <AdviceSlip
            adviceData={adviceData}
            updateAdvice={getAdvice}
            saveAdvice={saveAdvice}
          />
        )}
      </section>
      <section className="favourtite-slips-list">
        <h3>Favourite Advice Slips</h3>
        <ul>
          {savedAdvice.map((slip, id) => (
            <FavouriteAdviceSlip key={id} savedAdviceeSlip={slip} />
          ))}
        </ul>
      </section>
    </section>
  );
}

export default AdviceSection;
