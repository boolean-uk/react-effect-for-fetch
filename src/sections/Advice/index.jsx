import { useState, useEffect } from "react";
import AdviceSlip from "./components/AdviceSlip";
import FavoriteSlipsList from "./components/FavouriteSlipsList";
function AdviceSection() {
  const [advice, setAdvice] = useState(null);
  const [favoriteAdvices, setFavoriteAdvices] = useState([]);

  useEffect(() => {
    randomAdvice();
  }, []);

  const randomAdvice = () => {
    let randomId = Math.floor(Math.random() * 224)
    fetch(`https://api.adviceslip.com/advice/${randomId}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      setAdvice(data.slip.advice);
    });
  };

  const addFavorite = (ad) => {
    if(favoriteAdvices.includes(ad)){
      return;
    }
    setFavoriteAdvices([...favoriteAdvices, ad]);
  };
  return (
    <section>
      <h2>Advice Section</h2>
      <section className="adivce-slip">
        <h3>Some Advice</h3>
          {advice !== null && (
            <AdviceSlip
              advice={advice}
              addFavorite={addFavorite}
              randomAdvice={randomAdvice}
            />
          )}
      </section>
      <section className="favourtite-slips-list">
        <h3>Favourite Advice Slips</h3>
        <ul>
          {favoriteAdvices.length !== 0 &&
            favoriteAdvices.map((advice, index) => {
              return <FavoriteSlipsList key={index} advice={advice} />;
            })}
        </ul>
      </section>
    </section>
  );
}

export default AdviceSection;
