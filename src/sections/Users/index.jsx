import { useEffect, useState } from "react"
import UsersList from "./components/UsersList";



function UsersSection() {
  const url = 'https://boolean-uk-api-server.fly.dev/brandsegg/contact'
  const [usersData, setUsers] = useState([])
  

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url)
      const jsonData = await response.json()
      setUsers(jsonData)
    };
    fetchData();
  }, []);


  return (
    <section>
      <h2>Users Section</h2>
      <UsersList users={usersData}/>
    </section>
  )
}

export default UsersSection
