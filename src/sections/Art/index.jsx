import React, { useState, useEffect } from "react";

import ArtList from "./components/ArtList.jsx"

function ArtsSection() {
  const [artList, setArtList] = useState([]);

  useEffect(() => {
    fetch("https://boolean-api-server.fly.dev/art", {
      method: "GET"
    })
    .then((response) => response.json())
      .then((data) => {
        setArtList(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);
  
  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container"><ArtList artList = {artList}/></div>
    </section>
  )
}

export default ArtsSection
