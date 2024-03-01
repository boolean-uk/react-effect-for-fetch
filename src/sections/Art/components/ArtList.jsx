
import { useState, useEffect } from "react"

import ArtListItem from "./ArtListItem"

function ArtList() {
    const [art, setArt] = useState([])

    useEffect(() => {
        fetch('https://boolean-api-server.fly.dev/art')
            .then((response) => response.json())
            .then((result) => setArt(result))
    }, [])

    return (
        <div className="scroll-container">
            <ul className="art-list">
                {art.map((artPiece, index) => (
                    <ArtListItem
                        key={index}
                        artPiece={artPiece}
                    />
                ))}
            </ul>
        </div>
    )
}

export default ArtList