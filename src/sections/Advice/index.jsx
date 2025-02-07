import { useEffect, useState } from "react"
import AdviceSlip from './components/AdviceSlip'
import FavouriteSlips from './components/FavouriteSlipsList'

function AdviceSection() {
  const url = "https://api.adviceslip.com/advice";
  const [data, setData] = useState("");
  const [generate, setGenerate] = useState(false);
  const [favAdvice, setFavAdvice] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const jsonData = await response.json();
      setData(jsonData.slip.advice);
    };
    fetchData();
  }, [generate]);

  function newAdvice()
    {
        setGenerate(!generate);
    }
  
  function saveAdvice()
    {
        setFavAdvice([...favAdvice, data]);
        console.log(favAdvice)
    }  
  return (
    <section>
      <h2>Advice Section</h2>
      <AdviceSlip data={data}/>
      <button onClick={newAdvice}>Get More Advice</button>
      <button onClick={saveAdvice}>Save to Favourties</button>
      <section className="favourtite-slips-list">
        <h3>Favourite Advice Slips</h3>
        <FavouriteSlips favAdvice={favAdvice}/>
      </section>
    </section>
  )
}
export default AdviceSection
