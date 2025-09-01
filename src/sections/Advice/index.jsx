import { useEffect, useState } from "react"
import { getAdvice } from "../../api"
import AdviceSlip from "./components/AdviceSlip"
import FavouriteSlipsList from "./components/FavouriteSlipsList"

function AdviceSection() {

  const [advice, setAdvice] = useState({})
  const [favoriteAdvice, setFavoriteAdvice] = useState([])

  function newAdvice(){
    setAdvice({})
    getAdvice()
    .then((data) => setAdvice(data))
    .catch((err) => console.log(err))
  }

  function addToFavorites(){
    setFavoriteAdvice([...favoriteAdvice, advice])
  }

  useEffect(() => {
    newAdvice()
    console.log(advice)
  }, [])

  return (
    <>
      <section>
        <h2>Advice Section</h2>
        <section className="adivce-slip">
          <AdviceSlip advice={ advice } newAdvice={ newAdvice } addToFavorites={ addToFavorites } />
        </section>
        <section className="favourtite-slips-list">
          <h3>Favourite Advice Slips</h3>
          <FavouriteSlipsList favoriteAdvice={ favoriteAdvice } />
        </section>
      </section>
    </>
   )
}

export default AdviceSection
