import { useEffect, useState } from "react"

function UsersSection() {

  const [users, setUsers] = useState([])

  const getUsers = () => {
    fetch('https://randomuser.me/api/?results=10')
      .then(res => res.json())
      .then(data => setUsers(data.results))
  }

  useEffect(getUsers, [])




  const user = users.map((user, index) => (
    <li key={index} className="bg-blue">
      <img
        src= {`${user.picture.large}`}
        alt="Ritthy Ryan"
      />
      <h3>{`${user.name.title} ${user.name.first} ${user.name.last}`}</h3>
      <p>Email: {user.email}</p>
    </li>
  ))

  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <ul className="users-list">
          {user}
        </ul>
      </div>
    </section>
  )
}

export default UsersSection
