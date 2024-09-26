import { useState, useEffect } from "react";
import ArtList from "./components/ArtList";

function ArtsSection() {
  const [art, setArt] = useState([]);

  useEffect(() => {
    fetch(`https://boolean-api-server.fly.dev/art`)
      .then((response) => response.json())
      .then(setArt);
  }, []);

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ArtList art={art} />
      </div>
    </section>
  );
}

export default ArtsSection;
