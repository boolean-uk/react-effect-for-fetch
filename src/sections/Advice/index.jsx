import { useEffect, useState } from "react";
import FavouriteSipsList from "./components/FavouriteSlipsList";
import AdviceSlip from "./components/AdviceSlip";

function AdviceSection() {
  const [adviceSlipData, setAdviceSlipData] = useState({
    slip: {
      id: null,
      advice: "",
    },
  });

  const [savedAdviceSlips, setSavedAdviceSlip] = useState([
    {
      slip: {
        id: null,
        advice: "",
      },
    },
  ]);

  function GetNewAdviceSlip() {
    fetch(`https://api.adviceslip.com/advice`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        console.log(data);
        setAdviceSlipData(data);
      });
  }
  useEffect(() => {
    console.log(adviceSlipData, savedAdviceSlips);
  }, [adviceSlipData, savedAdviceSlips]);

  function saveAdviceToFavourites() {
    if (savedAdviceSlips[0].slip.advice === "") {
      setSavedAdviceSlip([adviceSlipData]);
    } else {
      setSavedAdviceSlip([...savedAdviceSlips, adviceSlipData]);
    }
  }

  return (
    <section>
      <h2>Advice Section</h2>
      <section className="adivce-slip">
        <h3>Some Advice</h3>
        <AdviceSlip adviceSlipData={adviceSlipData} />
        <button onClick={GetNewAdviceSlip}>Get MoreAdvice</button>
        <button onClick={saveAdviceToFavourites}>Save to Favourites</button>
      </section>
      <section className="favourtite-slips-list">
        <h3>Favourite Advice Slips</h3>
        <FavouriteSipsList savedAdviceSlips={savedAdviceSlips} />
      </section>
    </section>
  );
}

export default AdviceSection;
