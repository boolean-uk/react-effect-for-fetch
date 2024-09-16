import { useState, useEffect } from 'react'
import UsersList from "./components/UsersList"

function UsersSection({baseUrl}) {
  const [userList, setUserList] = useState()

  const retrieveUserList = async () => {
    await fetch(baseUrl+"scandiumSG/contact")
      .then((res) => res.json())
      .then((res) => setUserList(res))
  }

  useEffect(() => {
    retrieveUserList()
  }, [])

  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <UsersList list={userList}/>
      </div>
    </section>
  )
}

export default UsersSection
