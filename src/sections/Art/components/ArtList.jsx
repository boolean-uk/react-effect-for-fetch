import "../../../App.css";
import ArtListItem from "./ArtListItem";
import { useEffect, useState } from "react";

const baseURL = "https://boolean-uk-api-server.fly.dev/art";

const ArtList = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(baseURL);
            const jsonData = await response.json();
            setData(jsonData);
        };
        fetchData();
    }, [])

    return(
        <>
            <ul className="art-list"> 
                { data.map((art) => ( <li key={art.id}> <ArtListItem artData={art} /></li>)) }
            </ul>
        </>
    )
}

export default ArtList