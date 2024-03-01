import { useState, useEffect } from 'react'

function UsersSection() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch("https://boolean-api-server.fly.dev/nora-hansen/contact")
      .then(response => response.json())
      .then(setUsers)
  }, [])

  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <ul className="users-list">
          {users.length !== 0 &&
            users.map((user, index) => (
              <li key={index} style={{background: user.favouriteColour}}>
                  <img src={user.profileImage} alt={`${user.firstName} ${user.lastName}`} />
                  <h3>{`${user.firstName} ${user.lastName}`}</h3>
                  <p>Email: {user.email}</p>
              </li>
            ))
          }
        </ul>
      </div>
    </section>
  )
}

export default UsersSection
