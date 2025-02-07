import React, { useEffect, useState } from "react"
import UsersList from "./components/UsersList"
import { API_URL } from "../../App"

function UsersSection() {
  const usersApi = API_URL + "andreascnits/contact"
  const [users, setUsers] = React.useState([])
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(usersApi)
      const jsonData = await response.json()
      setUsers(jsonData)
    }
    fetchData()
  }, [])
  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
         <UsersList users={users}/>
      </div>
    </section>
  )
}

export default UsersSection
