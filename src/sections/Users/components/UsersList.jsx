// UsersList.jsx
import React from 'react';
import UsersListItem from './UsersListItem';

function UsersList({ users }) {
  return (
    <ul className="users-list">
      {users.map((user, index) => (
        <UsersListItem key={index} user={user} />
      ))}
    </ul>
  );
}

export default UsersList;
