import React from 'react'

function UsersListItem({UserData}) {
  return (
    <li style={{background:UserData.favouriteColour}}>
        <img
            src={UserData.profileImage}
            alt={`${UserData.firstName} ${UserData.lastName}`}
        />
        <h3>{`${UserData.firstName} ${UserData.lastName}`}</h3>
        <p>Email: {UserData.email}</p>
    </li>
  )
}

export default UsersListItem