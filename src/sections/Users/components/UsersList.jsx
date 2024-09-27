import React from 'react';

// UsersList component to render a list of users
const UsersList = ({ children }) => {
  return (
    <ul className="users-list">
      {children}
    </ul>
  );
};

export default UsersList;
