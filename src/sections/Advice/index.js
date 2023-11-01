import { useEffect, useState } from "react"
import AdviceSlip from "./components/AdviceSlip"
import FavouriteSlipsList from "./components/FavouriteSlipsList"

function AdviceSection() {
  ///Data for Advice Section:
  //place to put the data: 
  const [Advice, setAdvice] = useState()
  const [Favourites, setFav] = useState([])
  const [MoreAdvice, setMore] = useState(0)

  //function for fetching data: 
  async function getAdvice() {
  const response = await fetch("https://api.adviceslip.com/advice")
  console.log("getAdvice is running", response)
  const json = await response.json()
  //console.log("json Advice:",json.slip.advice)
  setAdvice(json.slip.advice)
  }

  //useEffect to fetch data for Advice:
  useEffect( () => {
  console.log("useEffect running for Advice")
  //getData().then((json) => {setArt(json);});
  getAdvice()
  }, [MoreAdvice])

  console.log("New Advice:",Advice)

  //when button "Save to Favourites" is clicked, add the currect Advice to Favourites:
  const addFavourite = (onClick) => {
    onClick.preventDefault()
    setFav([...Favourites, Advice])
    console.log("Favourites:",Favourites)
  }

  //when button "Get more Advice" is clicked - the useEffect is triggered again:
  const getmoreAdvice = (onClick) => {
    onClick.preventDefault()
    setMore(MoreAdvice + 1)
  }

  return (
    <section>
      <h2>Advice Section</h2>
      <AdviceSlip Advice={Advice} getmoreAdvice={getmoreAdvice} addFavourite={addFavourite} />
      <FavouriteSlipsList Favourites={Favourites}/>
    </section>
  )
}

export default AdviceSection