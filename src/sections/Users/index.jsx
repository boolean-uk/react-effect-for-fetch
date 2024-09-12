import { useState, useEffect } from 'react'

import UsersList from './components/UsersList'


function UsersSection() {
  const [userData, setUserData] = useState([])


  const baseURL = 'https://boolean-api-server.fly.dev/RobinKaastrup/contact'

  useEffect(() => {
    fetch(baseURL)
    .then(res => res.json())
    .then(setUserData)
  }, [])

  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <UsersList userData={userData} />
      </div>
    </section>
  )
}

export default UsersSection
