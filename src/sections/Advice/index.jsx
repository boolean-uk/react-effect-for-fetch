import { useEffect, useState } from "react";
import { fetchData } from "/src/fetch";
import { AdviceSlip } from "./components/AdviceSlip"
import { FavouriteSlipsList } from "./components/FavouriteSlipsList"

function AdviceSection() {
  const [data, setData] = useState(null);
  const [favouriteSlips, setFavouriteSlips] = useState([]);

  const changeSlip = () => {
    fetchData("https://api.adviceslip.com/advice", setData);
  }

  useEffect(() => {
    changeSlip();
  }, []);

  useEffect(() => {
    if (!data) return
    console.log(data.slip.advice)
  }, [data])

  const addToFavourite = (slip) => {
    if (favouriteSlips.find(favourite => favourite.id === slip.id)) 
      return
    else
      setFavouriteSlips(prevFavourites => ([...prevFavourites, slip ]));
  }

  const removeFromFavourite = (id) => {
    setFavouriteSlips(prevFavourites => prevFavourites.filter(slip => slip.id !== id));
  }

  if (!data) {
    return <p>Loading...</p>;
  }
  return (
    <section>
      <h2>Advice Section</h2>
      <AdviceSlip slip={data.slip} changeSlip={changeSlip} addToFavourite={addToFavourite} />
      <FavouriteSlipsList favourites={favouriteSlips} removeFromFavourite={removeFromFavourite} />
    </section>
  );
}

export default AdviceSection
