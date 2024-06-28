import { useEffect, useState } from "react";
import ArtList from './components/ArtList'

function ArtsSection() {
  const [artData, setArtData] = useState([]);
  console.log("art Data:", artData);

  useEffect(() => {
    fetch("https://boolean-uk-api-server.fly.dev/art")
      .then((res) => res.json())
      .then((data) => setArtData(data));
  }, []);

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ArtList artData={artData}/>
      </div>
    </section>
  );
}

export default ArtsSection;
