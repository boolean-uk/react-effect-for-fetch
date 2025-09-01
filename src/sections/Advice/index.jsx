import { useState, useEffect } from "react"
import FavoriteSlipsList from "./components/FavouriteSlipsList";
import AdviceSlip from "./components/AdviceSlip";
import "../../App.css";

function AdviceSection() {
  const url = "https://api.adviceslip.com/advice";

  const [savedAdvice, setSavedAdvice] = useState([])
  const [currentAdvice, setCurrentAdvice] = useState([])
  const [buttonClicked, setClickButton] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const jsonData = await response.json();
      console.log(jsonData.slip.advice)
      setCurrentAdvice(jsonData.slip.advice);
    };
    fetchData();
  }, [savedAdvice, buttonClicked]);

  const saveAdvice = () => {
    setSavedAdvice([
      ...savedAdvice,
      currentAdvice
    ])
  }


  return (
    <section>
      <h2>Advice Section</h2>
      <AdviceSlip advice={currentAdvice}  save={saveAdvice} getMore={() => setClickButton(buttonClicked + 1)}/>
      <FavoriteSlipsList savedAdvice={savedAdvice}/>
    </section>
  )
}

export default AdviceSection
