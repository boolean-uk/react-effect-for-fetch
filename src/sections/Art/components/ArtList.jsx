import ArtListItem from "../components/ArtListItem";

export default function ArtList({art}) {
    return (
        <ul className="art-list">
          <ArtListItem art={art}/>
        </ul>
    )
}