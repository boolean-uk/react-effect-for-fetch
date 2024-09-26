import React from 'react'
import { useState, useEffect } from 'react'
import UsersListItem from './UsersListItem'

function UsersList() {

    const [userData, setUserData] = useState([])

    useEffect(() => {
      fetch(`https://boolean-api-server.fly.dev/Eddy1108/contact`) 
      .then((response) => response.json())
      .then((data) => setUserData(data))
    },  [])
  
    // useEffect(() => {
  
    //   console.log("UseEffect:", userData)
    // },  [userData])

  return (
    <ul className="users-list">
      {userData.map((item, i) => (
       <UsersListItem item={item} i={i}/>
      ))}
    </ul>
  )
}

export default UsersList