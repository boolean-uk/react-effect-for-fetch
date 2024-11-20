import { useState } from "react";
import { useEffect } from "react";
import ArtList from "./components/ArtList";
function ArtsSection() {
  const [data, setData] = useState([
    {
      id: null,
      title: "",
      artist: "",
      imageURL: "",
      publicationHistory: [""],
    },
  ]);
  const url = "https://boolean-api-server.fly.dev";
  useEffect(() => {
    fetch(`${url}/art`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ul className="art-list">
          <ArtList data={data} url={url} />
        </ul>
      </div>
    </section>
  );
}

export default ArtsSection;
