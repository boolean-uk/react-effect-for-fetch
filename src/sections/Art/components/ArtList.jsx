import ArtListItem from "./ArtListItem"

function ArtList(props) {
    const { artData } = props

    return (
        <ul className="art-list">
            {artData.map((art, index) => (
                <ArtListItem 
                    key={index}
                    art={art}
                />
            ))}
        </ul>
    )
}

export default ArtList