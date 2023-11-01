import { useEffect, useState } from "react"
import UsersList from "./components/UsersList"

function UsersSection() {
//Data for Users Sections: 
//Place to put the data: 
const [Users, setUsers] = useState([])

//Function for fetching data: 
async function getUserData() {
  const response = await fetch('https://randomuser.me/api/?results=10')
  const json = await response.json()
  console.log("getUserData:",json.results)
  setUsers(json.results)
}

//useEffect to fetch data for Users:
useEffect ( () => {
  console.log("useEffect running for Users")
  getUserData()
}, [])

console.log("All users:", Users)

  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <UsersList Users={Users} />
      </div>
    </section>
  )
}

export default UsersSection