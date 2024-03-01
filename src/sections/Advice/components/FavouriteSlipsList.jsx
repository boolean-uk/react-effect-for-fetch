import PropTypes from "prop-types";

function FavouriteSlipsList(props) {
  return (
    <ul>
      {props.list.map((text) => (
        <li key={text}>{text}</li>
      ))}
    </ul>
  );
}
FavouriteSlipsList.propTypes = {
  list: PropTypes.array.isRequired,
};
export default FavouriteSlipsList;
