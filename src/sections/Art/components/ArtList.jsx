import ArtListItem from './ArtListItem';

function ArtList(props) {
    return (
        <ul className="art-list">
            {props.arts.map((art, index) => (
                <ArtListItem artItem={art} key={index}/>
            ))}
        </ul>
    )
}

export default ArtList;