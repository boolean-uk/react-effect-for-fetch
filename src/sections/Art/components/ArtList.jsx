import ArtListItem from "./ArtListItem";

export default function ArtList({ art, config }) {
    return(
        <ul className="art-list">
            <ArtListItem art={art} config={config}/>
        </ul>
    )
}