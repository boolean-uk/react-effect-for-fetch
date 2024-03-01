import ArtListItem from "./ArtListItem";

function ArtList(props) {
  return (
    <ul className="art-list">
      {props.data.map((image, index) => {
        return (
          <ArtListItem image={image} baseUrl={props.baseUrl} key={index}/>
        );
      })}
    </ul>
  );
}

export default ArtList;
