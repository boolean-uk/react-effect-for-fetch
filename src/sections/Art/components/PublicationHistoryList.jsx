import React from "react";

const PublicationHistoryList = ({ history }) => {
  return (
    <ul>
      {history.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default PublicationHistoryList;
