import { useEffect, useState } from "react";
import Artlist from "./components/ArtList";
import { fetchData } from "../../helpers/FetchData";

function ArtsSection() {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    const fetchArtworks = async () => {
      const data = await fetchData("https://boolean-uk-api-server.fly.dev/art");
      setArtworks(data);
    };

    fetchArtworks();
  }, []);

  return (
    <section>
      <h2>Arts Section</h2>
      <Artlist artworks={artworks} />
    </section>
  );
}

export default ArtsSection;
