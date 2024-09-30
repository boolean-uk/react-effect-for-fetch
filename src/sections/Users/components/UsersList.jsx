import React from 'react'
import UsersListItem from './UsersListItem'

const UsersList = ({ users }) => {
  return (
    <ul>
      {users.map((user) => (
        <>
            <UsersListItem userData={user}/>
        </>
      ))}
    </ul>
  )
}

export default UsersList
