import { useEffect, useState } from "react"
import AdviceSlip from "./components/AdviceSlip";
import FavouriteSlipList from "./components/FavouriteSlipsList";

const ROOT_URL = "https://api.adviceslip.com/advice"

function AdviceSection() {
  const [advice, setAdvice] = useState([]);
  const [check, setCheck] = useState([]);
  const [favourites, setFavourites] = useState([]);

  const fetchData = () => {
    fetch(ROOT_URL)
      .then(res => res.json())
      .then(data => setAdvice(data.slip.advice))
  };

  useEffect(fetchData, [check]);

  const getMoreAdvice = () => setCheck([...check]);

  const addToFav = () => {
    favourites.includes(advice) ? setFavourites([...favourites])
    : setFavourites([...favourites, advice]);
  };

  return (
    <section>
      <h2>Advice Section</h2>
      <section className="advice-slip">
        <AdviceSlip advice={advice} getMoreAdvice={getMoreAdvice} addToFav={addToFav} />
      </section>
      <section className="favourtite-slips-list">
        <FavouriteSlipList favourites={favourites} />
      </section>
    </section>
  )
}

export default AdviceSection
