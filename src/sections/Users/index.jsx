import { useState, useEffect } from "react"
import UsersList from "./components/UsersList";

function UsersSection() {

  const url = 'https://boolean-uk-api-server.fly.dev/alihaiderkhannn/contact'

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchusers = async () => {
    try {
      const response = await fetch(url)
      const data = await response.json();
      setUsers(data)
    }
    catch(error){
      console.e("Failed to fetch the users", error)
    }
  }

  fetchusers()
}, []);


  return (
    <section>
      <h2>Users Section</h2>
      
      <div className="scroll-container">
      
        <UsersList users={users}></UsersList>

      </div>
      
    </section>
  )
}

export default UsersSection
