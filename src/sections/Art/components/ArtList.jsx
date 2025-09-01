
/* eslint-disable react/prop-types */
import './Art.css'

import ArtListItem from "./ArtListItem";

function ArtList({ data, imageURLBase }) { 

    return (
        <>
        <ul className="list_of_arts">
            {data.map((art, index) => (
                <ArtListItem image={imageURLBase + art.imageURL} title={art.title} name={art.artist} publications={art.publicationHistory} key={index}/>
            ))}
        </ul>
        </>
    );
}

export default ArtList