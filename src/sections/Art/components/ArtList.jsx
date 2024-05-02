import ArtListItem from "./ArtListItem"

export default function ArtList ({art}) {
    return (
        <ul className="art-list">
        {art.map((item, index) => {
          // console.log(item)
          return (
            <ArtListItem item={item} index={index}></ArtListItem>
          )
        })}
      </ul>
    )
}