// UsersListItem.jsx
import React from 'react';

function UsersListItem({ user }) {
  return (
    <li style={{ background: user.favoriteColor }}>
      <img src={`https://www.gravatar.com/avatar/${user.email}?s=120&d=identicon`} alt={user.name} />
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
    </li>
  );
}

export default UsersListItem;
