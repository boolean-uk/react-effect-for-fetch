import { useState, useEffect } from 'react'
import UsersList from './components/UsersList'

function UsersSection() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('https://boolean-uk-api-server.fly.dev/davidstern/contact')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error))
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
