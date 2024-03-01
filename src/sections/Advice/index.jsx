import { useEffect, useState } from "react"
import AdviceSlip from "./components/AdviceSlip"
import FavouriteSlipsList from "./components/FavouriteSlipsList"


function AdviceSection() {
const [advice, setAdvice] = useState([])
const [favourites, setFavourites] = useState([])

const adviceURL = "https://api.adviceslip.com/advice"


async function getASlip() {
  await fetch(adviceURL)
  .then((res) => res.json())
  .then((responseData) => {setAdvice(responseData.slip.advice)})
  //.then(console.log(advice)+ "READ HERE")
  .then(console.log(favourites)+ "READ HERE")
}

const handleAddToFave = (event) => {
  console.log(event)
  if(!favourites.includes(advice)) {
    setFavourites([...favourites, advice])
  } else {
    console.log("Already in favourites")
  }
}

useEffect(() => {
  getASlip()
}, [])


  return (
    <section>
      <h2>Advice Section</h2>
      <AdviceSlip advice = {advice} newAdvice = {getASlip} saveAdvice = {handleAddToFave}/>
      <FavouriteSlipsList favourites={favourites} />
    </section>
  )
}

export default AdviceSection
