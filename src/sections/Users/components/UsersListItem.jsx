import React from "react";
import PropTypes from "prop-types";

function UsersListItem({ data }) {
  return (
    <li style={{background : data.favouriteColour}}>
      <img
        src={ data.profileImage }
        alt="Ritthy Ryan"
      />
      <h3>{ data.firstName } { data.lastName }</h3>
      <p>Email: { data.email }</p>
    </li>
  );
}

export default UsersListItem;

UsersListItem.propTypes = {
  data: PropTypes.object,
};
