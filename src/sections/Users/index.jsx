import { useState, useEffect} from 'react'
import UsersList from './components/UsersList'
function UsersSection() {
  const [users, setUsers] = useState([])
  const userName = "thomaafl";
  const url = `https://boolean-uk-api-server.fly.dev/${userName}/contact`;
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url)
      const jsonData = await response.json()
      console.log(jsonData)
      setUsers(jsonData)
    }
    fetchData()
  }, [])

    return (
      <section>
        <h2>Users Section</h2>
        <div className="scroll-container">
          <UsersList users = {users} />
        </div>
      </section>
    )
  
}

export default UsersSection
