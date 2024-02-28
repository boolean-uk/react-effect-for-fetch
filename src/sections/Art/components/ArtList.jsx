import ArtListItem from "./ArtListItem"
export default function ArtList({ artList, baseAPIUrl }) {
    return (
        <ul className="art-list">
            {
                artList.map((art, index) => (
                    <ArtListItem key={index} art={art} index={index} baseAPIUrl={baseAPIUrl} />
                ))
            }
        </ul>
    )
}