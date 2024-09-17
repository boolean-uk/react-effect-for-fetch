import { useState, useEffect } from "react"

import UsersList from "./components/UsersList"

function UsersSection() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch("https://boolean-api-server.fly.dev/migzus/contact")
    .then((response) => response.json())
    .then(setUserData)
  }, [])

  return (
    <section>
      <h2>Users Section</h2>
      <UsersList users={userData} />
    </section>
  )
}

export default UsersSection
