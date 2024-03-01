import PropTypes from "prop-types";

export default function PublicationHistoryList({ publications }) {
  let index = 0;
  return (
    <ol style={{ listStyleType: "circle" }} className="">
      {publications.map((publication) => (
        <li key={index++}>
          <p>{publication}</p>
        </li>
      ))}
    </ol>
  );
}

PublicationHistoryList.propTypes = {
  publications: PropTypes.array.isRequired,
};
