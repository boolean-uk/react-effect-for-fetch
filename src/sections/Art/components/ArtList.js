import ArtListItem from "./ArtListItem";

function ArtList(props) {
    return (
        <ul class="art-list">
            {props.data.map((artItem, index) => {
                return <ArtListItem artItem={artItem} index={index} />;
            })}
        </ul>
    );
}

export default ArtList;
