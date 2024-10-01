import { useEffect, useState } from "react"
import ArtList from "./components/ArtList";



function ArtsSection() {
  const url = 'https://boolean-uk-api-server.fly.dev/art'
  const [artData, setArtData] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url)
      const jsonData = await response.json()
      setArtData(jsonData)
    };
    fetchData();
  }, []);


  return (
    <section>
      <h2>Arts Section</h2>
      <ArtList paintings={artData}/>
    </section>
  );
};

export default ArtsSection
