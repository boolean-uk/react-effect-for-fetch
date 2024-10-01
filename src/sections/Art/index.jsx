import { useState, useEffect } from "react"
import ArtList from "./components/ArtList";

function ArtsSection() {
  const url = 'https://boolean-uk-api-server.fly.dev/art';

  const [art, setArt] = useState([]);

  // api call inside useEffect
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const jsonData = await response.json();
      setArt(jsonData);
    };
    fetchData();
  }, []);


  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ul className="art-list">
          <ArtList art={art}/>
        </ul>
      </div>
    </section>
  )
}

export default ArtsSection
