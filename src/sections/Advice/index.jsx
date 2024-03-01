import { useEffect, useState } from "react";
import FavouriteSlips from "./components/FavouriteSlipsList";
import AdviceSlip from "./components/AdviceSlip";

function AdviceSection() {


 
  const [advice, setAdvice] = useState({
    slip: {
      id:0, advice: "Don't always follow advices from the Internett"
    }
  });
  const [faveAdvice, setFaveAdvice] = useState([]);



  useEffect( () => {
    const fetchData = async () => {
      await getAdvice();
    }
    
  }, []);

  const getAdvice = async () => {
    fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then(setAdvice)
  }
  

  const handleFavourite = () => {
    setFaveAdvice([...faveAdvice, advice]);
  }

  return (
    <AdviceSlip advice={advice} getAdvice={getAdvice} handleFavourite={handleFavourite} faveAdvice={faveAdvice}/>
  )
}

export default AdviceSection
