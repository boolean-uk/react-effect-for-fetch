import React from 'react'
import UsersListItem from './UsersListItem'

function UsersList({userListItems}) {
  return (
    <ul className="users-list">
        {userListItems.map((x, index) => (
          <UsersListItem UserData={x} key={index} />
        ))}
    </ul>
  )
}

export default UsersList