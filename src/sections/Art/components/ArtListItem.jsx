import PropTypes from "prop-types";
import PublicationHistoryList from "./PublicationHistoryList";
function ArtListItem(props) {
  const { title, artist, imageURL,publicationHistory } = props.art;
  return (
   
      <li>
        <div className="frame">
          <img src={"https://boolean-api-server.fly.dev" + imageURL} />
        </div>
        <h3>{title}</h3>
        <p>Artist: {artist}</p>
        <h4>Publication History:</h4>
     <PublicationHistoryList list={publicationHistory}/>
      </li>
  
  );
}
ArtListItem.propTypes = {
  art: PropTypes.object.isRequired,
};
export default ArtListItem;
