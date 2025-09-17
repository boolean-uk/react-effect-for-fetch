import ArtListItem from "./ArtListItem";
import {useEffect, useState} from 'react';



function ArtList () {
    const [artList, setArtList] = useState([])

    useEffect(() => {
        fetch("https://boolean-uk-api-server.fly.dev/art")
    .then(res => res.json())
    .then(setArtList)
    }, [])

    return (
        <>
        <div className="scroll-container">
        <ul className="art-list">
            {artList.map(item => (
                <ArtListItem
                key= {item.id}
                imageURL={item.imageURL}
                title={item.title}
                artist={item.artist}
                publicationHistory={item.publicationHistory}
            />))}
        </ul>
        </div>
        </>
    )

}
export default ArtList;