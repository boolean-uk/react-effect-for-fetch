import { useState, useEffect } from "react";

// components
import ArtListItem from "./ArtListItem";

const ArtList = () => {
    const [arts, setArts] = useState([]);

    useEffect(() => {
        fetch("https://api.artic.edu/api/v1/artworks?limit=25")
            .then((res) => res.json())
            .then((data) =>
                setArts(
                    data.data.map((item) => {
                        return {
                            image_id: item.image_id,
                            title: item.title,
                            name: item.artist_title,
                            style_titles: [...item.style_titles],
                        };
                    })
                )
            );
    }, []);

    return (
        <ul className="art-list">
            {arts.map((art, index) => (
                <ArtListItem key={index} art={art} />
            ))}
        </ul>
    );
};

export default ArtList;
