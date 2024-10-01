import { useEffect, useState } from 'react'
import UsersList from './components/UsersList';

function UsersSection() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('https://boolean-uk-api-server.fly.dev/FelixMathiasson/contact')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error('ERROR! Could not fetch url:', err))
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
