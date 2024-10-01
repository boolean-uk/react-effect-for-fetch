import ArtListItem from "./ArtListItem";

export default function ArtList({ paintings }) {
    return (
        <ul>
            {paintings.map((item, i) => (
                <ArtListItem artListItem={item} key={i} />
            ))}
        </ul>
    );
};

