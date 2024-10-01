import { useEffect, useState } from "react"
import UsersList from "./components/UsersList"


function UsersSection() {
const [user, setUser] = useState([]);


useEffect(() => {

  const fetchArtData = async () => {
    const response = await fetch("https://boolean-uk-api-server.fly.dev/alinjo/contact")

    if (!response.ok) {
      throw new Error("Failed to fetch data!")
    }

    const data = await response.json()
    setUser(data)
  }
  fetchArtData()

}, [])



  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
       <UsersList userList={user} />
      </div>
    </section>
  )
}

export default UsersSection
