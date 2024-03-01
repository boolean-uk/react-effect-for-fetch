import PropTypes from "prop-types";
import ArtListItem from "./ArtListItem";
function ArtList(props) {
  return (
    <ul className="art-list">
      {props.art.map((art) => {
        return <ArtListItem key={art.id} art={art} />;
      })}
    </ul>
  );
}
ArtList.propTypes = {
  art: PropTypes.array.isRequired,
};
export default ArtList;
