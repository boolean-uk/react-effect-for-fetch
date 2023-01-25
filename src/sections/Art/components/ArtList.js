import { useEffect, useState } from "react"
import ArtListItem from "./ArtListItem"

export default function ArtList() {
    const [artData, setArtData] = useState([])

    useEffect(() => {
            fetch("https://api.artic.edu/api/v1/artworks?page=10")
            .then((res) => res.json())
            .then((data) => {
                setArtData(data.data)
            })
    }, [artData])

    return (
        <section>
            <h2>Arts Section</h2>
            <div className="scroll-container">
                <ul className="art-list">
                    {artData.map((artwork, i) => {
                        return <ArtListItem artwork={artwork} key={i} />
                    })}
                </ul>
            </div>
        </section>
    )
}