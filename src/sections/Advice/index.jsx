import { useState, useEffect } from "react"
import AdviceSlip from "./components/AdviceSlip"
import FavouriteSlipsList from "./components/FavouriteSlipsList"

export default function AdviceSection() {

    const [advice, setAdvice] = useState("")
    const [favourites, setFavourites] = useState([])

    useEffect(() => {
      fetchAdvice()
    }, [])

    const fetchAdvice = () => {
      fetch("https://api.adviceslip.com/advice")
        .then((response) => response.json())
        .then((data) => {
          setAdvice(data.slip.advice)
        })
    }

    const addFavourites = () => {
     if (!favourites.includes(advice)) {
        setFavourites((prevFavourites) => [...prevFavourites, advice])
     }
    }

  return (
    <section>
      <h2>Advice Section</h2>
      <AdviceSlip advice={advice} fetchAdvice={fetchAdvice} addFavourites={addFavourites}/>
      <FavouriteSlipsList favourites={favourites}/>
    </section>
  )
}