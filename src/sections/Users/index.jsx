import { useEffect, useState } from "react"
import UsersList from "./components/UsersList"

function UsersSection() {

  const [usersList, setUsersList] = useState(null)

  const baseURL = "https://boolean-uk-api-server.fly.dev/"
  const githubUsername = "jonasmelonas"

  useEffect(() => {
    fetch(`${baseURL}${githubUsername}/contact`)
    .then(res => res.json())
    .then(data => setUsersList(data))
  }, [])

  console.log(usersList)

  console.log(`${baseURL}${githubUsername}/contact`)

  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        {usersList && <UsersList usersList={usersList} />}
      </div>
    </section>
  )
}

export default UsersSection
