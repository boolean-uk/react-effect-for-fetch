import React, { useEffect, useState } from "react";
import ArtListItem from "./ArtListItem";

const ArtList = () => {
  const [arts, setArts] = useState([]);

  useEffect(() => {
    fetch("https://boolean-uk-api-server.fly.dev/art")
      .then((response) => response.json())
      .then((data) => {
        console.log("API Response:", data);
        setArts(data);
      })
      .catch((error) => console.error("Error fetching art data:", error));
  }, []);

  return (
    <ul className="art-list">
      {arts.map((art) => (
        <ArtListItem key={art.id} art={art} />
      ))}
    </ul>
  );
};

export default ArtList;
