import React, { useState } from "react"
import { useEffect } from "react"
import { Art } from "../interfaces/interface";
import ArtList from "./components/ArtList";


const ArtsSection = () => {
  const [artList, setArtList] = useState<Art[]>([]);

  useEffect(() => {
    const fetchArtData = async () => {
      const response = await fetch(`https://boolean-uk-api-server.fly.dev/art`);
      if (!response.ok) {
        throw new Error('Failed to fetch art data from api...');
      }
      const data = await response.json();
      setArtList(data);
    }
    fetchArtData();
  }, []);

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ArtList artList={artList}/>
      </div>
    </section>
  )
}

export default ArtsSection
