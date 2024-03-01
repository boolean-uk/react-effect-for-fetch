import { useEffect, useState } from "react";
import ArtList from "./components/ArtList";

function ArtsSection() {
  const urlAPI = "https://boolean-api-server.fly.dev/art";

  const [art, setArt] = useState([]);
  console.log(art)

  const fetchData = () => {
    fetch(urlAPI)
      .then((response) => response.json())
      .then((data) => setArt(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">

        <ArtList artList={art}/>
      </div>
    </section>
  );
}

export default ArtsSection;
