import React from 'react'

function UsersListItem({item}) {
let fullName = `${item.firstName} ${item.lastName}`
let favouriteColour = item.favouriteColour
let userStyle = {background: favouriteColour};

  return (<>
    <li style={userStyle}>
    <img
      src={item.profileImage}
      alt={fullName}
    />
    <h3>{fullName}</h3>
    <p>Gender: {item.gender}</p>
    <p>Email: {item.email}</p>
    <p></p>
    <p>City: {item.city}</p>
    <p>Street: {item.street}</p>
    <p>Job Title: {item.jobTitle}</p>
  </li>
  </>
  )
}

export default UsersListItem