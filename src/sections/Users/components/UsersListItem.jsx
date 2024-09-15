import React from 'react'

export default function UsersListItem({firstName, lastName, email, profileImage, favouriteColour}) {
  return (
    <li style={{background: `${favouriteColour}`}}>
        <img
          src={profileImage}
          alt="Profile image"
        />
        <h3>{firstName} {lastName}</h3>
        <p>{email}</p>
      </li>
  )
}
