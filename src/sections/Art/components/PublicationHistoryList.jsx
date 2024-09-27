import React from 'react';

// PublicationHistoryList component to render a list of publication history items
const PublicationHistoryList = ({ publicationHistory }) => {
  return (
    <ul>
      {publicationHistory.map((publication, index) => (
        <li key={index}>{publication}</li>
      ))}
    </ul>
  );
};

export default PublicationHistoryList;
