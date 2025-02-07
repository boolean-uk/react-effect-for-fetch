import { useEffect, useState } from "react";
import ArtListItem from "./ArtListItem"

function ArtList() {
    const url = "https://boolean-uk-api-server.fly.dev/art";
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          const response = await fetch(url);
          const jsonData = await response.json();
          setData(jsonData);
        };
        fetchData();
      }, []);

    return (
        <>
            <ul className="art-list">
                {data.map((artwork, index) => (
                    <ArtListItem key={index} Artwork={artwork} />
                ))}
            </ul>
        </>
    );
}

export default ArtList;