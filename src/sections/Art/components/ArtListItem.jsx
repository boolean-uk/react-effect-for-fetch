import React from "react";
import PublicationHistoryList from "./PublicationHistoryList";
import { API_URL } from "../../../App";
function ArtListItem({art}) {
    return (
        <ul className="art-list">
        <div className="frame">
            <img src={API_URL + art.imageURL} alt={art.title} />
            <h3>{art.title}</h3>
            <p>Artist: {art.artist}</p>
             <PublicationHistoryList publicationHistory={art.publicationHistory}/>
         </div>
        </ul>

    );
}
export default ArtListItem;