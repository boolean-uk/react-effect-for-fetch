import { useState, useEffect } from "react";
import AdviceSlip from "./components/AdviceSlip";
import FavouriteSlipsList from "./components/FavouriteSlipsList";

function AdviceSection() {

  const [adviceData, setAdviceData] = useState(null);

  const [favAdvices, setFavAdvices] = useState([])

  const newAdvice = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((data) => setAdviceData(data))
  };

  useEffect(() => {
    newAdvice()
  }, []);

  const addFavAdvice = (newSlip) => {
    for (const elem of favAdvices) {
      if (elem.id === newSlip.id) {
        return
      }
    }
    setFavAdvices([...favAdvices, newSlip]);
  }

  return (
    <section>
      <h2>Advice Section</h2>
      {adviceData && (
        <AdviceSlip
          slip={adviceData.slip}
          newAdvice={newAdvice}
          addFavAdvice={addFavAdvice}
        />
      )}
      <FavouriteSlipsList favAdvices={favAdvices} />
    </section>
  );
}

export default AdviceSection
