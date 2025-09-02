import { useEffect, useState } from "react"
import AdviceSlip from "./components/AdviceSlip";
import FavouriteSlipsList from "./components/FavouriteSlipsList";

function AdviceSection() {

const [favAdvices, setfavAdvices] = useState([]);
const [newadvice, setnewadvice] = useState({slip:{id: "0", advice: "Loading..."}});
const [newfetch, setnewfetch] = useState(false)
const baseurl = 'https://api.adviceslip.com/advice'

useEffect(() => {fetch(baseurl).then(res => res.json()).then(setnewadvice)}, [newfetch])
console.log(newadvice)

const fetchNewAdvice = () => {
    setnewfetch(!newfetch)
};

const saveToFavourites = () => {
    setfavAdvices(prev => [...prev, newadvice])
}

  return (
    <section>
      <AdviceSlip newadvice={newadvice} fetchNewAdvice={fetchNewAdvice} saveToFavourites={saveToFavourites}/>
      <FavouriteSlipsList favourites={favAdvices}/>
    </section>
  )
}

export default AdviceSection
