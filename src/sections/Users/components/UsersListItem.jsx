import React from 'react'

function UsersListItem({user}) {
const liStyle = {
    background: user.favouriteColour,
    };

    return (
    <li style={liStyle}>
    <img
        src={user.profileImage}
        alt={user.firstName+ " "+user.lastName}
    />
    <h3>{user.firstName+ " "+user.lastName}</h3>
    <p>{user.email}</p>
    </li>
  )
}

export default UsersListItem