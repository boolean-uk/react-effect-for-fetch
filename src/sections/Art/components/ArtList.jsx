import ArtListItem from "./ArtListItem.jsx";
import {useEffect, useState} from "react";

function ArtList(props) {
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

    const getFullImageUrl = (imageUrl) => {
        return url.replace("art", imageUrl);
    }

    return (
        <ul className="art-list">
            {
                data.map((item, index) => (
                    <ArtListItem title={item.title} artist={item.artist} imageURL={getFullImageUrl(item.imageURL)}
                                 publicationHistory={item.publicationHistory} key={index}/>
                ))
            }
        </ul>
    );
}

export default ArtList;