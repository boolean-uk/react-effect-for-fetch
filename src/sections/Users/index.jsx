import { useEffect, useState } from "react"

function UsersSection() {
  const [users, setUser] = useState([])

  useEffect(()=> {
    fetch("https://boolean-uk-api-server.fly.dev/ludwig-jl/contact")
    .then(res => res.json())
    .then(setUser)
  }, [])

  console.log(users)
  
  return (
    <section>
     <h2>Users Section</h2>
      <div className="scroll-container">
        <ul className="users-list">
          {users.map((user, index) => (
            <li key={index} style={{ background: user.favouriteColour }}>

              <img src= {`${user.profileImage}`} alt={`${user.firstName}` + `${user.lastName}`}/>

              <h3>{user.firstName + ' ' + user.lastName}</h3>
              <p>Email: {user.email}</p>
            </li>
          ))}
    </ul>

  </div>
    </section>
  )
}

export default UsersSection
