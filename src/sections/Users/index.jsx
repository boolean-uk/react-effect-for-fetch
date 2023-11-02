import { useEffect, useState } from "react"

function UsersSection() {

  const userURL = 'https://randomuser.me/api/?inc=name,gender,email,picture&results=10'

  const [users, setUsers] = useState([])
  const [dataType, setDataType] = useState('')

  useEffect(() => {
    if (!dataType) {
      fetch(userURL)
        .then(res => res.json())
        .then(data => setUsers(data.results))
    }
  }, [dataType])

  console.log(users)

  function changeBgColour(user) {
    if (user.gender === 'male') return "bg-blue"
    else return "bg-pink"
  }

  function formatName(user) {
    const nameGroup = user.name
    return `${nameGroup.title} ${nameGroup.first} ${nameGroup.last}`
  }
  
  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <ul className="users-list">
          {users.map((user, index) => 
            <li key={index} className={changeBgColour(user)}>
            <img
              src={user.picture.medium}
              alt={`${user.name.first} ${user.name.last}`}
            />
            <h3>{formatName(user)}</h3>
            <p>Email: {user.email}</p>
          </li>
          )}
        </ul>
      </div>
    </section>
  )
}

export default UsersSection
