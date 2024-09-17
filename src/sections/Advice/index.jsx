import { useState } from "react"
import AdviceSlip from "./components/AdviceSlip"
import FavouriteSlipsList from "./components/FavouriteSlipsList"

function AdviceSection() {
  //Creating a list to store favourites
  const [myFavourites, setMyFavourites] = useState([])

  return (
    <section>
      <h2>Advice Section</h2>
      {/*Passing the list down*/}
      <AdviceSlip myFavourites={myFavourites}
        setMyFavourites={setMyFavourites}/>
        
      {/*Passing the list down*/}
      <FavouriteSlipsList myFavourites={myFavourites}/>
    </section>
  )
}

export default AdviceSection
