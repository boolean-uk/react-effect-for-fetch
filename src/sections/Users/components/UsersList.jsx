import React from 'react'
import UsersListItem from './UsersListItem'

function UsersList({users}) {
    
  return (
    <>
    <ul class="users-list">
      {users.map((user, index) => {
        return <UsersListItem key={index} user={user}/>
      })}
    </ul>
    </>
  )
}

export default UsersList