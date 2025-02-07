import { useEffect, useState } from 'react';
import AdviceSlip from './components/AdviceSlip';
import FavouriteSlipsList from './components/FavouriteSlipsList';

function AdviceSection() {
  const [advice, setAdvice] = useState(null);
  const [fetchTrigger, setFetchTrigger] = useState(0); 
  const [favourites, setFavourites] = useState([])

  
  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
    .then(res => res.json())
    .then(data => setAdvice(data.slip))
  }, [fetchTrigger])
  
  const getMoreAdvice = () => {
    setFetchTrigger((prev) => prev + 1);
  }

  const saveToFavourites = () => {
    if (advice) {
      setFavourites((prevFavourites) => [...prevFavourites, advice]);
    }
  }

  return (
    <section>
      <h2>Advice Section</h2>
      <section className="adivce-slip">
        {advice && 
          <AdviceSlip advice={advice} getMoreAdvice={getMoreAdvice} saveToFavourites={saveToFavourites}/>
        }
      </section>
      <section className="favourtite-slips-list">
        <FavouriteSlipsList favourites={favourites}/>
      </section>
    </section>
  )
}

export default AdviceSection
