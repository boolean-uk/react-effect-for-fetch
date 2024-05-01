import ArtListItem from "./ArtListItem"

export default function ArtList({ artData }) {
    console.log(artData)
    return(
        <ul className="art-list">
          {artData.map((item, index) => {
            return <ArtListItem key={index} item={item} />
          })}
        </ul>
    )
}