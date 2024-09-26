import ArtListItem from "./ArtListItem"


function ArtList({ artList, apiUrl }) {
    return (
        <ul className="art-list">
            {
                artList.map((art, index) => (
                    <ArtListItem key={index} art={art} index={index} apiUrl={apiUrl} />
                ))
            }
        </ul>
    )
}

export default ArtList