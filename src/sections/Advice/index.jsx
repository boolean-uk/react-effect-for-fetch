import { useState } from "react"
import { useEffect } from "react";
import AdviceSlip from "./components/AdviceSlip";
import FavouriteSlipsList from "./components/FavouriteSlipsList";


function AdviceSection() {
  const[data, setData] = useState('');
  const[favAdvice, setFavAdvice] = useState([
    {
      id: 0, 
      advice: "xxxxxxx"
      
    }]);
    
    function fetching() {
      const url = `https://api.adviceslip.com/advice`
      fetch(url)
      .then(res => res.json())
      .then(data => setData(data))
    }


    //API calling:
    useEffect(() => {
      fetching()
    }, []);
    

  return (
    <section>
      <h2>Advice Section</h2>
      <section className="adivce-slip">
        {data && <AdviceSlip data={data} setData={setData} setFavAdvice={setFavAdvice} favAdvice={favAdvice} fetching={fetching}/>}
      </section>
      <section className="favourtite-slips-list"></section>
      {favAdvice && <FavouriteSlipsList favAdvice={favAdvice} />}
    </section>
  )
}

export default AdviceSection



