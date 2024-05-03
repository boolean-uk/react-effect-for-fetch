import { useEffect, useState } from "react"
import AdviceSlip from "./components/AdviceSlip"
import FavouriteSlipsList from "./components/FavouriteSlipsList"

function AdviceSection() {
  const [favSlips, setFavSlips] = useState([])
  const [fetchMore, setFetchMore] = useState(1)
  const [advice, setAdvice] = useState("")

  const url = "https://api.adviceslip.com/advice"

  useEffect(()=>{
    fetch(url).then(async response => {
      let data = await response.json()
      setAdvice(data.slip.advice)
    })
  },[fetchMore])
  
  function handleFetchMore(){
    let nextFetchMore = fetchMore+1
    setFetchMore(nextFetchMore)
  }

  function saveToFavSlips(advice){
    let updatedFavs = [...favSlips, advice]
    setFavSlips(updatedFavs)
  }

  return (
    <section>
      <h2>Advice Section</h2>
      <section className="adivce-slip">
        <AdviceSlip advice={advice} saveToFavs={saveToFavSlips} fetchMore={handleFetchMore} />
      </section>
      <section className="favourtite-slips-list">
        <FavouriteSlipsList list={favSlips}/>
      </section>
    </section>
  )
}

export default AdviceSection
