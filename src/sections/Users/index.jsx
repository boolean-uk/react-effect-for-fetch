import { useEffect, useState } from "react"

function UsersSection() {

  const [usersData, setUsersData] = useState([])

  const fetchUsersData =  () => {
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => setUsersData(data.results))
     
  }


  useEffect(fetchUsersData, [])

  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
          <ul className="users-list">
            {usersData.map((userData, idx) => (
              <li className="bg-blue" key={idx}>
                <img src={userData.picture.medium} alt={userData.name.first} />
                <h3>{`${userData.name.title} ${userData.name.first} ${userData.name.last}`}</h3>
                <p>Email: ${userData.email}</p>
              </li>          
            ))}
          </ul>
      </div>
    </section>
  )
}

export default UsersSection
