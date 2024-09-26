import { useEffect, useState } from 'react'
import UserList from "./components/UsersList"

const apiUrl = 'https://boolean-api-server.fly.dev'
const githubName = 'Vayeros'

function UsersSection() {
  const [userList, setUserList] = useState([])

  useEffect(() => {
    fetch(`${apiUrl}/${githubName}/contact`)
      .then((response) => response.json())
      .then((data) => setUserList(data))
  }, [])

  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <UserList userList={userList} />
      </div>
    </section>
  )
}

export default UsersSection
