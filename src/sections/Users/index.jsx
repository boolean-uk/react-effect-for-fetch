import UserList from "./components/UsersList"
import { useState } from "react"
import { useEffect } from "react"

function UsersSection() {

  const [userList, setUserList] = useState([])

  const fetchUsers = () => {
    fetch('https://randomuser.me/api/?results=10')
    .then(res => res.json())
    .then(data => {
      setUserList(data.results)
        console.log(data.results)
      })
  }
  
  useEffect(fetchUsers, [])
  

  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <UserList userList={userList} setUserList={setUserList}/>
      </div>
    </section>
  )
}

export default UsersSection
