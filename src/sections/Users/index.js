import { useEffect, useState } from "react"
import UsersList from "./components/UsersList"

function UsersSection() {
  const [users, setUsers] = useState(null)

  const USERS_NUM_PARAM = 5
  const FIELDS_PARAM = 'gender, name, email, id, picture'

  async function getUserData() {
    const url = `https://randomuser.me/api/?results=${USERS_NUM_PARAM}&inc=${FIELDS_PARAM}&noinfo`
    const response = await fetch(url)
    const json = await response.json()
    setUsers(json.results)
  }

  useEffect(() => {
    getUserData()
  }, [])

  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <UsersList users={users} />
      </div>
    </section>
  )
}

export default UsersSection
