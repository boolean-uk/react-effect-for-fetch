import { useState, useEffect } from 'react';


function UsersSection() {

  const [users, setUsers] = useState([]);

  console.log(users)
  
  useEffect(() => {
    fetch('https://boolean-api-server.fly.dev/noahlenn/contact')
      .then(response => response.json())
      .then(responseData => setUsers(responseData))
  }, []); 


  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">

        <ul className="users-list">
          {users.map((user, id) => (
            // {user.favouriteColour}
            <li key={id} style={{ backgroundColor: user.favouriteColour }}>

              <img src={user.profileImage} width={100} />
              <div>
                <p>{user.firstName} {user.lastName}</p>
                <p>Email: {user.email}</p>
              </div>
            </li>
          ))}
        </ul>

      </div>
    </section>
  )
}

export default UsersSection
