import { useEffect, useState } from "react"
import FavouriteSlipsList from "./components/FavouriteSlipsList"
import AdviceSlip from "./components/AdviceSlip";


function AdviceSection() {

  const url = 'https://api.adviceslip.com/advice'

  const [advice, setAdvice] = useState('');
  const [favouriteslips, setFavouriteslips] = useState([]);
  


  const fetchadvices = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setAdvice(data.slip.advice);
    }
    catch(error) {
      console.error("Error fetching advice:", error)
    }
  }

  useEffect(() => {
    fetchadvices();
  }, []
  )

  const handleNewAdvice = () => {
    fetchadvices();
  }



  const handleAddingFavourite = () => {
    setFavouriteslips([...favouriteslips, advice])   //adding current advice in to the list of favourite advices.
  }

  useEffect(() => {
    console.log(favouriteslips)
  }, [favouriteslips]
  )

  return (
    <section>
      <h2>Advice Section</h2>
      <section className="adivce-slip">
        <AdviceSlip advice={advice} handleNewAdvice={handleNewAdvice} handleAddingFavourite={handleAddingFavourite}/>
      </section>
      <section className="favourtite-slips-list">
        <FavouriteSlipsList favourites={favouriteslips}/>
      </section>
    </section>
  )
}

export default AdviceSection
