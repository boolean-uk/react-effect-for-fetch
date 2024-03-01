import { useEffect, useState } from "react";

function UsersSection() {

  const [user, setUser] = useState([]);



  useEffect(() => {
    fetch("https://boolean-api-server.fly.dev/VegardVog/contact")
    .then(response => response.json())
    .then(setUser)

  }, []);
  return (
  <section>
    <h2>Users Section</h2>
    <div className="scroll-container">
      <ul className="users-list">
        {user.map((user, index) => (
            <li style={{background: "#0d7f26"}} key={index}>
              <img
                src={`https://www.gravatar.com/avatar/${user.profileImage}`}
                alt= {user.firstName} />
              <h3>{user.gender + ", " + user.firstName + " " + user.lastName} </h3>
              <p>Email: {user.email}</p>
            </li>
        )) }

      </ul>
    </div>
  </section>
  )
}

export default UsersSection
