import { useEffect, useState } from "react"
import AdviceSlip from "./components/AdviceSlip";
import FavouriteSlipsList from "./components/FavouriteSlipsList";

function AdviceSection() {
  const url = "https://api.adviceslip.com/advice";
  const [favourites, setFavourites] = useState([])
  const [advice, setAdvice] = useState(null)

  const fetchData = async () => {
          const response = await fetch(`${url}?t=${new Date().getTime()}`);
          const jsonData = await response.json();
          setAdvice(jsonData.slip);
        };

  useEffect(() => {
        fetchData();
      }, [])


  return (
    <section>
      <h2>Advice Section</h2>
      <section className="adivce-slip">
        {advice ? <AdviceSlip slip={advice}/> : <p>Loading...</p>}
        <button onClick={fetchData}>Get more advice</button>
        <button onClick={() => setFavourites(prev => [...prev, advice])}>Save to Favourites</button>
      </section>
      <section className="favourtite-slips-list">
        <FavouriteSlipsList slips={favourites}/>
      </section>
    </section>
  )
}

export default AdviceSection
