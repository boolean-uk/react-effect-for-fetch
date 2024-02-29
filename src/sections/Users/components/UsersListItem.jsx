import React from 'react';

// UsersListItem component to render individual user items
const UsersListItem = ({ avatarUrl, name, email, favoriteColour }) => {

  return (
    <li style={{ background: favoriteColour }}>
      <img src={avatarUrl} alt={name} />
      <h3>{name}</h3>
      <p>Email: {email}</p>
    </li>
  );
};

export default UsersListItem;
