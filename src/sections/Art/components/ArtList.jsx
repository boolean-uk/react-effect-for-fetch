
import ArtListItem from "./ArtListItem"
export default function ArtList(props){

    const artData = props.artData
    
    return(

        <ul className="art-list">
            {artData.map((artListItem, index) => (
        <ArtListItem artListItem = {artListItem} key={index} />
      ))}
    </ul>

    );
}
