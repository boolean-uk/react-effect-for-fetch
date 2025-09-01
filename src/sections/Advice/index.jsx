import { useEffect, useState } from "react";
import AdviceSlip from "./components/AdviceSlip";
import FavouriteSlipsList from "./components/FavouriteSlipsList";

function AdviceSection() {
  
  const url = "https://api.adviceslip.com/advice"
  const [data, setData] = useState([])
  const [favData, setFavData] = useState([])

  const fetchData = async () => {
    const response = await fetch(url)
    const jsonData = await response.json()
    setData(jsonData)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <section>
      <h2>Advice Section</h2>
      <section className="adivce-slip">
        <AdviceSlip
          data={data}
          fetchData={fetchData}
          setFavData={setFavData}
        />
      </section>
      <section className="favourtite-slips-list">
        <FavouriteSlipsList favData={favData} />
      </section>
    </section>
  )
}

export default AdviceSection
