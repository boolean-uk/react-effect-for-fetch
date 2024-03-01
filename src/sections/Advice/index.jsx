import React, { useState, useEffect } from "react";
import AdviceSlip from "./components/AdviceSlip";
import FavouriteSlipsList from "./components/FavouriteSlipsList";

function AdviceSection() {
  const urlAPI = "https://api.adviceslip.com/advice";

  const [advice, setAdvice] = useState("");
  const [favoriteAdvice, setFavoriteAdvice] = useState([]);

  const fetchData = () => {
    fetch(urlAPI)
      .then((response) => response.json())
      .then((data) => setAdvice(data.slip.advice))
      .catch((error) => console.error("Error fetching advice:", error));
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
      <section className="adivce-slip">
        <h3>Some Advice</h3>

        <AdviceSlip advice={advice} />
        <button onClick={() => getMoreAdvice()}>Get More Advice</button>
        <button onClick={() => saveToFavorite()}>Save to Favourties</button>
      </section>
      <section className="favourtite-slips-list">
        <h3>Favourite Advice Slips</h3>

        <FavouriteSlipsList adviceFavoriteList={favoriteAdvice} />
      </section>
    </section>
  );
}

export default AdviceSection;
