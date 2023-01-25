import { useEffect, useState } from "react"

function UsersSection() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    // if (!art) return;
    console.log("sending fetch request for users", users)
    fetch(`https://randomuser.me/api/?results=10`)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.results)
        console.log("data users", data)
      })
  }, [])

  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <ul className="users-list">
          {
            users.map((user, index) => (
              //if gender = male, className = "bg-blue", else classname  = "bg-pink"
              <li key={index}>
                <img src={user.picture.medium} alt="no image" />
                <h3>Name: {user.name.title} {user.name.first} {user.name.last}</h3>
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
