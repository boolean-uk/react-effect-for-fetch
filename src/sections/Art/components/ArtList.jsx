import ArtListItem from "./ArtListItem";

export default function ArtList(props){
    const{artList} = props;
    return(
        <ul className="art-list">
          {artList.map((artListItem, index) => (
            <ArtListItem artListItem={artListItem} key={index}/>
          ))} 
        </ul>
    )
}