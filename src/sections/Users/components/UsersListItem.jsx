import React from 'react'

const UsersListItem = ({ userData }) => {
  return (
    <li key={userData.id} style={{backgroundColor: userData.favouriteColour}}>
      <img  src={userData.profileImage}></img>
      <p><b>{userData.firstName} {userData.lastName}</b></p>
      <p>Email: {userData.email}</p>
    </li>
  )
}

export default UsersListItem
