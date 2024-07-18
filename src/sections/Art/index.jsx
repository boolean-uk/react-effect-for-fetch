import { useEffect, useState } from "react";
import ArtList from "./components/ArtList";
function ArtsSection() {
  const [pics, setPics] = useState([]);
  useEffect(() => {
    fetch("https://boolean-uk-api-server.fly.dev/art")
      .then((response) => response.json())
      .then(setPics);
  }, []);
  return (
    <section>
      <h2>Arts Section</h2>

      <div className="scroll-container">
        <ArtList pics={pics} />
      </div>
    </section>
  );
}

export default ArtsSection;
