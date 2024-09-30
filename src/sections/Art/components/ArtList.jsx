import ArtListItem from "./ArtListItem";

export default function ArtList({arts}) {
    return(
    <ul className="art-list">
        {arts.map((art) => (
            <li key={art.id}>
                <ArtListItem art={art} />
            </li>
        ))}
    </ul>
    );
}