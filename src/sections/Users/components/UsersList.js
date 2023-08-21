import React from 'react'
import UsersListItem from './UsersListItem'

function UsersList({ userData }) {

  return (
    <div className="scroll-container">
      <ul className="users-list">
        {userData.map((user) => (
          <UsersListItem key={user.login.uuid} user={user} />
        ))}
      </ul>
    </div>
  );
}

export default UsersList;