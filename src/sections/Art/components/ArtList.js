import { useEffect, useState } from "react"

import ArtListItem from "./ArtListItem"

function ArtList() {
    const [art, setArt] = useState([])

    async function getArtworks() {
        const response = await fetch(`https://api.artic.edu/api/v1/artworks?fields=id,image_id,title,artist_display,subject_titles`)
        const json = await response.json()
        const imgBase = json.config.iiif_url + '/'
        const imgExt = '/full/843,/0/default.jpg'
        json.data.map(artwork => {
            const imgId =  artwork.image_id
            const imgUrl = imgBase+imgId+imgExt
            artwork["imgUrl"] = imgUrl
        })
        setArt([... json.data])
    }

    useEffect(() => {
        getArtworks()
    }, [])

    return (
        <ul className="art-list">
            {
                art.map(artwork => {
                    return <ArtListItem key={artwork.id} artwork={artwork}/>
                })
            }
        </ul>
    )
}

export default ArtList