import ArtListItem from "./ArtListItem";

function ArtList(props) {
    const { art } = props;
  
    return (
      <ul>
        {art.map((art, index) => {
          return <ArtListItem key={index} art={art} />;
        })}
      </ul>
    );
  }
  
  export default ArtList;