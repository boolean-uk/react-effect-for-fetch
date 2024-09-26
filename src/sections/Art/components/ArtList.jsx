import ArtListItem from './ArtListItem'
function ArtList(props){

    return (
        <ul className="art-list">
            {props.arts.map((art, i) =>
                <ArtListItem key={i} art={art}/>
                )}
        </ul>
    )
}

export default ArtList