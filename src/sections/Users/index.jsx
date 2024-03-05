import { useEffect, useState } from "react"
import UsersListComponent from "./components/UsersList"

function UsersSection() {
  const [userData, setUserData] = useState([]);
  const baseURL = "https://boolean-api-server.fly.dev"

  useEffect(() => {
    fetch("https://boolean-api-server.fly.dev/KonWritesCode/contact")
    .then((res) => res.json())
    .then(setUserData)
  }, [])

  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <UsersListComponent userData={userData}/>
      </div>
    </section>
  )
}

export default UsersSection
