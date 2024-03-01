import React from "react";
import PropTypes from "prop-types";
import ArtListItem from "./ArtListItem";

function ArtList({ itemList, baseURL }) {
  return (
    <ul className="art-list">
      {itemList.map((item, index) => (
        <li key={index}>
          <ArtListItem itemData={item} baseURL={baseURL} />
        </li>
      ))}
      ;
    </ul>
  );
}

ArtList.propTypes = {
  itemList: PropTypes.array.isRequired,
  baseURL: PropTypes.string.isRequired,
};

export default ArtList;
