import { useState, useEffect } from "react";
import FavouriteSlipsList from "./components/FavouriteSlipsList";


function AdviceSection() {
  const [currentAdvice, setCurrentAdvice] = useState(null);
  const [favouriteAdvices, setFavouriteAdvices] = useState([]);

  useEffect(() => {
    getNewAdvice()
  }, []);

  const saveAsFavourite = () => {
    //Check if advice already saved
    for(const favouriteAdvice of favouriteAdvices) {
      if (favouriteAdvice.id === currentAdvice.id) {
        return
      }
    }
    setFavouriteAdvices([...favouriteAdvices, currentAdvice])
  }

  const getNewAdvice = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => {
        const data = response.json();
        return data;
      })
      .then((responseData) => {
        setCurrentAdvice(responseData.slip);
      });
  }

  return (
    <section>
      <h2>Advice Section</h2>
      <section className="adivce-slip">
        <h3>Some Advice</h3>
        {currentAdvice && <p>{currentAdvice.advice}</p>}
        <button onClick={getNewAdvice}>
          Get More Advice
        </button>
        <button onClick={saveAsFavourite}>Save to Favourties</button>
      </section>
      <section className="favourtite-slips-list">
        <h3>Favourite Advice Slips</h3>
        <FavouriteSlipsList favouriteAdvices={favouriteAdvices} />
      </section>
    </section>
  );
}

export default AdviceSection
