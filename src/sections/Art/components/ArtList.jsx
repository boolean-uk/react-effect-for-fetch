import ArtListItem from "./ArtListItem";

const ArtList = ({ data }) => {
    return (
        <ul className="art-list">
            {data.map((art) => (
                <ArtListItem key={art.id} art={art} />
            ))}
        </ul>
    );
};

export default ArtList;
