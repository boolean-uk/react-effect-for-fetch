import PropTypes from "prop-types";

function PublicationHistoryList(props) {
  return (
    <ul>
      {props.list.map((text, index) => (
        <li key={index}>{text}</li>
      ))}
    </ul>
  );
}
PublicationHistoryList.propTypes = {
  list: PropTypes.array.isRequired,
};
export default PublicationHistoryList;
