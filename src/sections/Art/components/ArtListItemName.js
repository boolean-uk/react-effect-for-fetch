function ArtListItemName(art) {
    return (
        <>
            {
                !art.art.artist_title || art.art.artist_title === "Unknown artist" ?
                    <strong>"No artist name given"</strong> :
                    <strong>{art.art.artist_title}</strong>
            }
        </>
    )
}
export default ArtListItemName