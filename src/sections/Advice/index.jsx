import {useState} from 'react';
import AdviceSlip from './components/AdviceSlip';
import FavouriteSlipsList from './components/FavouriteSlipsList';




function AdviceSection() {

  const [favouriteSlips, setFavouriteSlips] = useState([])
  const MakeFavourite = (advice) => {
    { favouriteSlips.includes(advice) ? (
      setFavouriteSlips([...favouriteSlips])) : setFavouriteSlips([...favouriteSlips, advice])
    }
  }


  return (
    <section>
      <h2>Advice Section</h2>
      <section className="adivce-slip">
        <AdviceSlip MakeFavourite={MakeFavourite} />
      </section>
      <section className="favourtite-slips-list">
        <FavouriteSlipsList favouriteSlips={favouriteSlips} />
      </section>
    </section>
  )
}

export default AdviceSection
