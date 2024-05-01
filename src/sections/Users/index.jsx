import { useState } from "react"
import { useEffect } from "react"

function UsersSection() {
  const [users, setUsers] = useState([])
  
  useEffect(() => {
    fetch('https://boolean-uk-api-server.fly.dev/LeonardoSaraceli/contact')
      .then(res => res.json())
      .then(setUsers)
  }, [])
  
  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        {users.map(user => 
          <ul key={user.id} className="users-list">
            <li style={{ background: `${user.favouriteColour}`}}>
              <img
                src={`https://www.gravatar.com/avatar/${user.email}?s=120&d=identicon`}
                alt={`${user.firstName} ${user.lastName}`}
              />
              <h3>{user.gender.toLowerCase().includes('female') ? 'Ms' : 'Mr'} {user.firstName} {user.lastName}</h3>
              <p>Email: {user.email}</p>
            </li>
          </ul>
          )}
      </div>
    </section>
  )
}

export default UsersSection
