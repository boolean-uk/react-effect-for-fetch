import { useState, useEffect } from "react"
function UsersSection() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch("https://boolean-api-server.fly.dev/Louisshr/contact",{
      method: 'GET'
    })
    .then(response => response.json())
    .then((data) => (setUsers(data)))

  }, [])  
  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <ul className="users-list">
          {users.map((user, index) => (
            <li key={index} style={{background: user.favouriteColour}}>              
              <img
              src={user.profileImage}
              alt={`${user.firstName} ${user.lastName}`}
              />
              <h3>{`${user.firstName} ${user.lastName}`}</h3>
              <p>Email: {user.email}</p>
            </li>
          ))}
      
        </ul>
      </div>
    </section>
  )
}

export default UsersSection
