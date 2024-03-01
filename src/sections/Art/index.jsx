import { useState, useEffect } from "react";
import ArtList from "./components/ArtList";

const baseUrl = "https://boolean-api-server.fly.dev";
function ArtsSection() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(baseUrl + "/art")
      .then((response) => {
        const data = response.json();
        return data;
      })
      .then((responseData) => {
        setData(responseData);
      });
  }, []);

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        {data && <ArtList data={data} baseUrl={baseUrl}/>}
      </div>
    </section>
  );
}

export default ArtsSection;
