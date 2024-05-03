import { useState, useEffect } from "react";
import ArtList from "./components/ArtList";

function ArtsSection() {
  const url = "https://boolean-uk-api-server.fly.dev/";
  const [artWorks, setArtWorks] = useState([]);

  useEffect(() => {
    fetch(url.concat("art")).then(async (response) => {
      let data = await response.json();
      let list = data.map((item) => {
        return { ...item, imageURL: url.concat(item.imageURL) };
      });
      setArtWorks(list);
    });
  }, []);

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ArtList artWorks={artWorks} />
      </div>
    </section>
  );
}

export default ArtsSection;
