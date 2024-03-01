import { useEffect, useState } from "react";

function AdviceSlip({ setFavouriteSlips, favouriteSlips }) {
  const [adviceSlip, setAdviceSlip] = useState(null);
  const [fetchingAdvice, setFetchingAdvice] = useState(false);
  const [alreadyAddedToFavorites, setAlreadyAddedToFavorites] = useState(false);

  const fetchAdvice = () => {
    setFetchingAdvice(true);
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => setAdviceSlip(data.slip.advice))
      .catch((error) => console.error("Error fetching advice:", error))
      .finally(() => setFetchingAdvice(false));
  };

  useEffect(() => {
    fetchAdvice();
  }, []); // Run once on component mount

  const handleNewAdvice = () => {
    if (!fetchingAdvice) {
      fetchAdvice();
    }
    setAlreadyAddedToFavorites(false);
  };

  const handleSaveToFavorites = () => {
    setAlreadyAddedToFavorites(true);
    if (favouriteSlips.includes(adviceSlip)) {
      return;
    }
    setFavouriteSlips([...favouriteSlips, adviceSlip]);
    console.log("favouriteSlips", favouriteSlips);
  };

  return (
    <div>
      {adviceSlip && (
        <>
          <h3>Some Advice</h3>
          <p style={{ minHeight: "40px" }}>{adviceSlip}</p>
          <button onClick={handleNewAdvice} disabled={fetchingAdvice}>
            {fetchingAdvice ? "Fetching Advice..." : "Get New Advice"}
          </button>
          <button
            onClick={handleSaveToFavorites}
            disabled={alreadyAddedToFavorites}>
            Save to Favorites
          </button>
        </>
      )}
    </div>
  );
}

export default AdviceSlip;
