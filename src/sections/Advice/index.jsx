import { useState, useEffect } from 'react';
import AdviceSlip from './components/AdviceSlip';
import FavouriteSlipsList from './components/FavouriteSlipsList';

const apiUrl = 'https://api.adviceslip.com/advice';
function AdviceSection() {
  const [shouldFetch, setShouldFetch] = useState(false);
  const [adviceSlip, setAdviceSlip] = useState(null);
  const [favouriteSlips, setFavouriteSlips] = useState([]);

  useEffect(() => {
    console.log('Fetching advice')
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setAdviceSlip(data);
      });
  }, [shouldFetch]);

  const addToFavourites = () => {
    if (!adviceSlip) return;
    if (favouriteSlips.includes(adviceSlip.slip.advice)) return;
    setFavouriteSlips([...favouriteSlips, adviceSlip.slip.advice]);
  }

  return (
    <section>
      <h2>Advice Section</h2>
      <AdviceSlip adviceSlip={adviceSlip} setShouldFetch={setShouldFetch} shouldFetch={shouldFetch} addToFavourites={addToFavourites} />
      <FavouriteSlipsList favouriteSlips={favouriteSlips} />
    </section>
  )
}

export default AdviceSection