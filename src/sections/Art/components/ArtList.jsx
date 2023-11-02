import { useState, useEffect } from "react";
import ArtListItem from "./ArtListItem";

function ArtList () {
    console.log('ArtList', ArtList);

    const [artList, setArtList] = useState([]);

    //my function which fetches data from the art API using a GET method

    const fetchArtList = () => {
        console.log('fetchArtList', fetchArtList);
        fetch('https://api.artic.edu/api/v1/artworks')
        .then(response => response.json())
        .then(data => setArtList(data));
    }

    useEffect(() => {
        fetchArtList();
    }, []);

    return (
        <ul>
            {artList.map((art) => (
                <li key={art.id}>
                    <ArtListItem art={art} />
                </li>
            ))}
        </ul>
    );  
}

export default ArtList;

























// return (
    // <ul>
    //   {subjects.map((subject) => (
    //     <li key={subject.id}>
    //       <SubjectListItem subject={subject} />
    //     </li>
    // </ul>
// )