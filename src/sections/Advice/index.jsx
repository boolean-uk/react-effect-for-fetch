import { useState, props, useEffect } from "react";
import AdviceSlip from "./components/AdviceSlip";
import FavouriteSlipsList from "./components/FavouriteSlipsList";

function AdviceSection() {
  const [savedAdvice, setSavedAdvice] = useState([]);
  return (
    <section>
      <AdviceSlip savedAdvice={savedAdvice} setSavedAdvice={setSavedAdvice}/>
      <FavouriteSlipsList savedAdvice={savedAdvice}/>
    </section>
  );
}

export default AdviceSection;
