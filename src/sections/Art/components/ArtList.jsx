import React from 'react';

// ArtList component to render a list of art items
const ArtList = ({ children }) => {
  return (
    <ul className="art-list">
      {children}
    </ul>
  );
};

export default ArtList;

