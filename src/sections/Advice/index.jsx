import { useState } from "react";
import AdviceSlipComponent from "./components/AdviceSlip";
import FavouriteSlipsListComponent from "./components/FavouriteSlipsList";

export default function AdviceSection() {
  const [favourites, setFavourites] = useState([])

  return (
    <section>
      <h2>Advice Section</h2>
      <AdviceSlipComponent favourites={favourites} setFavourites={setFavourites} />
      <FavouriteSlipsListComponent favourites={favourites} />
    </section>
  )
}

