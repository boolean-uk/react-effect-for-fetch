import React from "react";
import ArtListItem from "./ArtListItem";
import { Art } from "../../interfaces/interface";

interface ArtListProps {
    artList: Art[]
}

const ArtList = ({ artList }: ArtListProps) => {

    return (
        <ul className="art-list">
            { artList.map((item) => (
                <ArtListItem key={item.id} artItem={item} />
            ))}
        </ul>
    );

};

export default ArtList;