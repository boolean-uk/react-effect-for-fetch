import { useState, useEffect } from "react";
import UsersListItem from "./UsersListItem";

function UsersList() {
  const url = "https://boolean-uk-api-server.fly.dev/tvaltn/contact"

  const [usersList, setUsersList] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url)
      const jsonData = await response.json()
      setUsersList(jsonData)
    }
    fetchData()
  })

  return (
    <ul className="users-list">
      {usersList.map((item, key) => (
        <UsersListItem item={item} key={key}/>
      ))}
    </ul>
  )
}

export default UsersList