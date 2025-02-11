import ArtListItem from "./ArtListItem";


function ArtList(props) {
    const art = props.art;

  return (
    <ul className="art-list">
        {art?.map((artItem, index) => (
                <ArtListItem key={index} artItem={artItem}/>
            ))}

    </ul>
  );
}

export default ArtList