import ArtListItem from "./ArtListItem"

export default function ArtList({art}) {
    return(
        <>
            {art.map((art, i) => (
                <ArtListItem art={art} key={i}/>
            ))}
        </>
    )
}
