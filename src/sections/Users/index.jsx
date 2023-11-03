import { useEffect, useState } from "react"

function UsersSection() {

  const [usersData, setUsersData] = useState([])

  const fetchUsersData =  () => {
    fetch('https://randomuser.me/api/?results=10')
    .then(res => res.json())
    .then(data => {setUsersData(data.results)
      console.log(data)
    })
     
  }

  function userGender(gender) {
    if(gender === 'male'){
      return 'bg-blue'
    }else {
      return 'bg-pink'
    }
  }

  useEffect(fetchUsersData, [])

  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
          <ul className="users-list">
            {usersData.map((userData, idx) => (
              <li className={userGender(userData.gender)} key={idx}>
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
