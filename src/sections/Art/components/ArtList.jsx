import { ArtListItem } from "./ArtListItem";

export function ArtList({ art, address }) {
    return (
        <ul className="art-list">
            <ArtListItem
                art={art}
                address={address}
            />
        </ul>
    )
}