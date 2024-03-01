import { useEffect, useState } from "react";
import AdviceSlip from "./components/AdviceSlip";
import FavouriteSlipsList from "./components/FavouriteSlipsList";

const BASE_URL = "https://api.adviceslip.com/advice";

function AdviceSection() {
  const [advice, setAdvice] = useState("");
  const [favourites, setFavourites] = useState([]);

  const newRandomAdvice = async () => {
    const advice = await fetchData(BASE_URL);
    setAdvice(advice.slip.advice);
  };

  const addToFavourites = () => {
    if (!favourites.includes(advice)) {
      setFavourites([...favourites, advice]);
    }
  };

  const fetchData = async (url) => {
    try {
      const options = { cache: "no-cache" };
      const response = await fetch(url, options);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data: ", error);
      return null;
    }
  };

  useEffect(() => {
    newRandomAdvice();
  }, []);

  return (
    <section>
      <h2>Advice Section</h2>
      <AdviceSlip
        advice={advice}
        onRequestNew={newRandomAdvice}
        onFavourite={addToFavourites}
      />
      <FavouriteSlipsList items={favourites} />
    </section>
  );
}

export default AdviceSection;
