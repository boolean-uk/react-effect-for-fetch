import { useState, useEffect } from 'react'
function UsersSection() {


  const [user, setUser] = useState([])
 

  useEffect(() => {
    fetch(`https://boolean-api-server.fly.dev/hassanhussa1n/contact`)
    .then(response => response.json())
    .then(setUser)
    }, [])

   

  console.log(user)

  
  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <ul className="users-list">
        {user.map((user, index) => (
          <li key={index} style={{background: user.favouriteColour}}>
            <img
              src={`${user.profileImage}`}
              alt={`${user.firstName} ${user.lastName}`}
            />
            <h3>{`${user.firstName} ${user.lastName}`}</h3>
            <p>Email: {user.email}</p>
          </li>
        ))}
        </ul>
      </div>
    </section>
  );
}

export default UsersSection
