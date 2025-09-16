import { useEffect, useState} from "react"

function AdviceSection() {
 
  const url = "https://api.adviceslip.com/advice"
 
 
  const [data, setData] = useState([])
  const [slip, setSlip] = useState("")
  const [favorite, setFavorite] = useState([])
  

  useEffect(()=>{
    const fetchData = async ()=>{
      const response = await fetch(url);
      const jsonData = await response.json();
      setData(jsonData)
      console.log(jsonData)
      
    };
    

    fetchData();
  },[])

  useEffect(()=>{

    const fetchData = async ()=>{
      const response = await fetch(url);
      const jsonData = await response.json();
      setData(jsonData)
    };
    fetchData();
    
  }, [slip])

  
  return (
    <section>
      <h2>Advice Section</h2>
      <section className="adivce-slip">
    <h3>Some Advice</h3>
    <p>{slip}</p>
    <button onClick={()=>{setSlip(data.slip.advice)}}>Get More Advice</button>
    <button onClick={()=>{setFavorite([... slip])}}>Save to Favourties</button>
      </section>
      <section className="favourtite-slips-list">
    <h3>Favourite Advice Slips</h3>
    <ul>
      <li>Measure twice, cut once.</li>
      <li>Dont let the bastards grind you down.</li>
      <li>Always the burrito.</li>
    <li> {favorite}</li>
    </ul>
      </section>
    </section>
  )
}

export default AdviceSection
