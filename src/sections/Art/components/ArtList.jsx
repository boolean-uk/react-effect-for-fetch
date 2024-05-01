import { useEffect, useState } from "react"
import ArtListItem from "./ArtListItem"

export default function ArtList() {
    const [data, setData] = useState([])

    useEffect(() => {
            fetch("https://boolean-uk-api-server.fly.dev/art")
            .then((response) => response.json())
            .then(setData)
    }, [])

    return (
        <ul className="art-list">
            {data.map((e, index) => {
                return <ArtListItem key={index} e={e} />
            })}
        </ul>
    )
}
