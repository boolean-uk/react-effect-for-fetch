import AdviceSlip from "./components/AdviceSlip"
import FavouriteSlipsList from "./components/FavouriteSlipsList"

import {useState, useEffect} from 'react'

function AdviceSection() {

  const [favouriteList, setFavouriteList] = useState([]);

  return (
  <section>
    <AdviceSlip favouriteList={favouriteList} setFavouriteList={setFavouriteList} />
    <FavouriteSlipsList favouriteList={favouriteList} setFavouriteList={setFavouriteList} />
  </section>
  )
}

export default AdviceSection
