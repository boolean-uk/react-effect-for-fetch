import React from 'react'

export default function UserListItem({user}) {
    const lineStyle = {
        background: user.favouriteColour,
    }

    return (
        <li style={lineStyle}>
            <img src={user.profileImage} alt={user.firstName + " " + user.lastName} />
            <h3>{user.firstName + " " + user.lastName}</h3>
            <p>{user.email}</p>
        </li>
    )
}
