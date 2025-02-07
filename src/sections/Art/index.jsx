import React, { useEffect, useState } from "react";
import ArtList from "./components/ArtList";
import { API_URL } from "../../App";
function ArtsSection() {
  const artApi = API_URL + "art"
  const [artData, setArtData] = useState([])
  useEffect(() => {
    const fetchData = async() => {
      const response = await fetch(artApi);
      const jsonData = await response.json();
      setArtData(jsonData);
    };
    fetchData();
  }, []);


  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ArtList artData={artData} />
      </div>
    </section>
  )
}

export default ArtsSection
