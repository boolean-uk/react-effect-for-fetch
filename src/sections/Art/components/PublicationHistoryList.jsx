import ArtListItem from "./ArtListItem";

export default function PublicationHistory(props){
    return(
        <>
            {props.list.map((item, index) => <ArtListItem key={index} item={item}/>)}
        </>
    )
}
