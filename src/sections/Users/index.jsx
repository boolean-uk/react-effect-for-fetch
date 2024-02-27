import { useState } from "react"
import { useEffect } from "react"

const URL ="https://boolean-api-server.fly.dev/Annemoon-de-Groen/contact"

function UsersSection() {
  const [users, setUsers] = useState([])

  useEffect(() => {console.log("Fetch users from...", URL)
  fetch(URL, {}).then(
    (response) => {
      return response.json();
    }).then((jsonData) =>{
      console.log(jsonData)
      setUsers(jsonData)
    })
    }, [])

  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <ul className="users-list">
          {
            users.map((user, index) =>{
              return(
                <li style={{background: user.favouriteColour}}>
                  <img src = {user.profileImage} alt = {user.firstName}/>
                  <h3>{user.firstName} {user.lastName}</h3>
                  <p>Email: {user.email}</p>
                </li>
              )
            })
          }
        </ul>
      </div>
    </section>
  )
}

export default UsersSection
