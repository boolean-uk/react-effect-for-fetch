import { useEffect, useState } from "react";
import AdviceSlip from "./components/AdviceSlip";
import FavouriteSlipsList from "./components/FavouriteSlipsList";

function AdviceSection() {

  const [adviceSlips, setAdviceSlips] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [favouriteSlips, setFavoriteSlips] = useState([])

  useEffect(() => {
    // Fetch advice slips from API
    const fetchAdviceSlips = async () => {
      try {
        const response = await fetch('https://api.adviceslip.com/advice');
        const data = await response.json();
        setAdviceSlips(data.slip); // Store advice slips in state
        setIsLoading(false)
      } catch (error) {
        console.error('Error fetching advice slips:', error);
      }
    };

    fetchAdviceSlips(); // Call fetchAdviceSlips function on component mount
  }, [isLoading]); // Empty dependency array ensures useEffect runs only once on component mount


  const handleSave = () => {
    setFavoriteSlips([...favouriteSlips, adviceSlips.advice])
    console.log(favouriteSlips)
  }

  const newAdvice = () => {
    setIsLoading(true)
  }

  return (
    <section>
      <h2>Advice Section</h2>
      <section className="adivce-slip">{isLoading ? (<div>Loading ...</div>) : (
       <AdviceSlip advice={adviceSlips.advice} handleSave={handleSave} newAdvice={newAdvice} />  
      )}
      </section>
      <section className="favourtite-slips-list">
        <FavouriteSlipsList favouriteSlips={favouriteSlips} />
      </section>
    </section>
  )
}

export default AdviceSection
