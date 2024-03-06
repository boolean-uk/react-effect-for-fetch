import React, { useState, useEffect } from "react";
import AdviceSlip from "./components/AdviceSlip";
import FavouriteSlipsList from "./components/FavouriteSlipsList";

function AdviceSection() {
  const urlAPI = "https://api.adviceslip.com/advice";

  const [advice, setAdvice] = useState("");
  const [favoriteAdvice, setFavoriteAdvice] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(urlAPI);
      if (!response.ok) {
        throw new Error("Failed to fetch advice");
      }
      const data = await response.json();
      setAdvice(data.slip.advice);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const getMoreAdvice = () => {
    fetchData();
  };

  const saveToFavorite = () => {
    if (advice.trim() !== "") {
      setFavoriteAdvice((prevSlips) => [...prevSlips, advice]);
    }
  };

  return (
    <section>
      <h2>Advice Section</h2>
      <section className="advice-slip">
        <h3>Some Advice</h3>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <>
            <AdviceSlip advice={advice} />
            <button onClick={getMoreAdvice}>Get More Advice</button>
            <button onClick={saveToFavorite}>Save to Favorites</button>
          </>
        )}
      </section>
      <section className="favourite-slips-list">
        <h3>Favorite Advice Slips</h3>
        <FavouriteSlipsList adviceFavoriteList={favoriteAdvice} />
      </section>
    </section>
  );
}

export default AdviceSection;

