import { useState, useEffect } from "react";
import AdviceSlip from "./components/AdviceSlip";
import FavourtiteSlipsList from "./components/FavouriteSlipsList";

function AdviceSection() {
  const [data, setData] = useState([]);
  const [favouriteAdvices, setFavouriteAdvices] = useState([]);

  const fetchData = async () => {
    const string = await fetch("https://api.adviceslip.com/advice");
    const data = await string.json();
    setData(data.slip);
  };

  const saveAdviceToFavourites = (slip) => {
    if (!favouriteAdvices.find((fav) => fav.id === slip.id)) {
      setFavouriteAdvices([...favouriteAdvices, slip]);
    }
    console.log(favouriteAdvices);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section>
      <h2>Advice Section</h2>
      <section className="adivce-slip"></section>
      <section className="favourtite-slips-list"></section>
      {data && (
        <AdviceSlip
          slip={data}
          onNewAdvice={fetchData}
          onSaveAdvice={saveAdviceToFavourites}
        />
      )}
      <FavourtiteSlipsList favouriteAdvices={favouriteAdvices} />
    </section>
  );
}

export default AdviceSection;
