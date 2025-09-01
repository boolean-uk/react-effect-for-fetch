
import { useState, useEffect } from 'react'
import FavouriteSlipsList from './components/FavouriteSlipsList'
import AdviceSlip from './components/AdviceSlip'

function AdviceSection() {

  const url = "https://api.adviceslip.com/advice"

  const [data, setData] = useState([])
  const [isClicked, setIsClicked] = useState(false)
  const [favourites, setFavourites] = useState([])

  const onClick = () => {
    setIsClicked(!isClicked)
  }

  const onFavourite = (e) => {
    if (!(favourites.includes(e.target.value))){
    setFavourites([...favourites, e.target.value])
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url)
      const jsonData = await response.json()
      setData(jsonData)
    }
    fetchData()
  }, [isClicked])

  return (
    <section>
      <h2>Advice Section</h2>
      <section className="adivce-slip">
        <AdviceSlip advice={data.slip?.advice} onClick={onClick} onFavourite={onFavourite} />
      </section>
      <section className="favourtite-slips-list">
        <FavouriteSlipsList favourites={favourites} />
      </section>
    </section>
  )
}

export default AdviceSection
