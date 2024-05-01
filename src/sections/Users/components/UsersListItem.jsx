import { useState, useEffect } from "react"

export default function UserListItem() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch(`https://boolean-api-server.fly.dev/hkyksk/contact`)
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <section>
      <ul className="users-list">
          <div className="users">
          {users.map((user, index) => (
            <li key={index} style={{ backgroundColor: user.favouriteColour }}>
              <img src={user.profileImage}/>
              <h3>{user.firstName + " " + user.lastName} <br/> </h3>
              <p>Gender: {user.gender} </p> 
              <p>Email: {user.email} </p> 
            </li>
          ))}
          </div>
      </ul>
    </section>
  )
}
