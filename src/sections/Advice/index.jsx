import { useEffect, useState } from "react";

import AdviceSlip from "./components/AdviceSlip";
import FavouriteSlipsList from "./components/FavouriteSlipsList";

const BASE_URL = "https://api.adviceslip.com/advice";

function AdviceSection() {
  const [adviceData, setAdviceData] = useState({});
  const [savedAdviceData, setSavedAdviceData] = useState([]);

  const adviceExists = (savedAdviceData.some(data => data.id === adviceData.id))

  async function obtainAdviceData() {
    const response = await fetch(BASE_URL);
    const result = await response.json();
    setAdviceData(result.slip);
  }

  useEffect(() => {
    obtainAdviceData();
  }, []);

  function appendToSavedAdvice() {
    if (!adviceExists) setSavedAdviceData([...savedAdviceData, adviceData] )
  }

  return (
    <section>
      <h2>Advice Section</h2>
      <AdviceSlip
        adviceData={adviceData}
        obtainAdviceData={obtainAdviceData}
        appendToSavedAdvice={appendToSavedAdvice}
        adviceExists={adviceExists}
      />
      <FavouriteSlipsList savedAdviceData={savedAdviceData}/>
    </section>
  );
}

export default AdviceSection;
