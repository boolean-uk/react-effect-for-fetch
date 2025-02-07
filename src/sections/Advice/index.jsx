import { useEffect, useState } from "react"
import AdviceSlip from "./components/AdviceSlip"
import FavouriteSlipsList from "./components/FavouriteSlipsList"

function AdviceSection() {
  const[advice, setAdvice] = useState("");
  const[getNewAdvice, setGetNewAdvice] = useState(true); // Initially, get a random advice
  const[favorites, setFavorites] = useState([]); 

  useEffect(() => {
    const fetchData = async () => {
      if (!getNewAdvice) return;
      fetch("https://api.adviceslip.com/advice")
          .then(data => data.json())
          .then(dat => {
            setAdvice(dat.slip.advice)
            
            if (getNewAdvice)
              setGetNewAdvice(false);

          });
    }
    fetchData();
  },
  [getNewAdvice]
  );

  let updateAdviceSlip = () => {
    setGetNewAdvice(true);
  };
  let addAdviceToFavorites = (favorite) => {
    if(!(favorites.includes(advice)))
      setFavorites([...favorites, advice])
  };
  return (
    <section>
      <h2>Advice Section</h2>
      <section className="adivce-slip">
        <AdviceSlip advice_string={advice} updateAdviceSlip={updateAdviceSlip} addFavorites={addAdviceToFavorites}/>
      </section>
      <section className="favourtite-slips-list">
        <FavouriteSlipsList adviceFavorites={favorites} />
      </section>
    </section>
  )
}

export default AdviceSection
