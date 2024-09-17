import ArtListItem from "./ArtListItem";

const ArtList = ({ artList }) => {
    return (
        <div>
            {artList.map((artwork, i) => (
                <ul key={i} className="art-list">
                    <ArtListItem artwork={artwork} />
                </ul>   
            ))}
        </div>
    );
};

export default ArtList;