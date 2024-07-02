import React from "react";

const PublicationHistoryList = ({ publicationHistory }) => {
  return (
    <ul>
      {publicationHistory.map((entry, index) => (
        <li key={index}>{entry}</li>
      ))}
    </ul>
  );
};

export default PublicationHistoryList;
