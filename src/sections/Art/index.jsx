import { useState, useEffect } from "react"
import ArtList from "./components/ArtList";

function ArtsSection() {
  const artURL = "https://boolean-uk-api-server.fly.dev/art";
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(artURL);
      const jsonData = await response.json();
      setData(jsonData);
    };
    fetchData();
  }, []);


  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ArtList artList={data} />
      </div>
    </section>
  )
}

export default ArtsSection
