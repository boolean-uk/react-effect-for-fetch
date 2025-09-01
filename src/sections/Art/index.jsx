import { useEffect, useState } from "react"
import ArtList from "./components/ArtList";

function ArtsSection() {

  const url = "https://boolean-uk-api-server.fly.dev/art";
  const baseImgUrl = "https://boolean-uk-api-server.fly.dev";
  const [data, setData] = useState([]);

  useEffect( () => {
    const fetchData = async () => {
      const response = await fetch(url);
      const jsonData = await response.json();
      setData(jsonData)
    }
    fetchData();
  } , []);

  return (
    <section>
      <h2>Arts Section</h2>
      <ArtList data={data} baseImgUrl={baseImgUrl}/>
    </section>
  )
}

export default ArtsSection
