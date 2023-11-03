import AdviceSlip from "./components/AdviceSlip"
import Favourites from "./components/FavouriteSlipsList"
import { useEffect, useState } from 'react'

function AdviceSection({advice, getAdvice}) {
  
  const [favourites, setFavourites] = useState([])
  const addToFavourites = (item) => {
    if (favourites.includes(item) === false) {
      setFavourites([
      ...favourites,
      item
    ])} else {
      alert(`“${item.advice}” is already in your collection.`)
    }
  }

  return (
    <section>
      <h2>Advice Section</h2>
      <section className="advice-slip">
        <h3>Some Advice</h3>
        <AdviceSlip advice={advice}/>
        <button onClick={() => getAdvice()}>Get More Advice</button>
        <button onClick={() => addToFavourites(advice)}>Save to Favourites</button>
      </section>
      <section className="favourite-slips-list">
        <h3>Favourite Advice Slips</h3>
        <Favourites listOfFavourites={favourites}/>
      </section>
    </section>
  )
}

export default AdviceSection
