import { useEffect, useState } from "react"

function UsersSection() {
  const [users, setUsers] = useState([])

  useEffect(() => {

    fetch(`https://randomuser.me/api/?results=20`)
      .then((response) => response.json())
      .then((data) => {
        console.log("userdata", data.results)
        setUsers(data.results)
      })
  }, [])

  function userToClass(user){
    var userClass = ""
    if(user.gender === 'male'){
      userClass = "bg-blue"
    }
    else{
      userClass = "bg-pink"
    }
    return userClass
  }


  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <ul className="users-list">
          {users.map((user, index) => (

              <li key={index} className={userToClass(user)}>
                <img src={user.picture.medium} alt={user.gender} />
                <h3>{user.name.title} {user.name.first} {user.name.last}</h3>
                <p>Email: {user.email}</p>
              </li>
            
            
              // <li key={index} className="bg-blue">
              //   <img src={user.picture.medium} alt={user.gender} />
              //   <h3>{user.name.title} {user.name.first} {user.name.last}</h3>
              //   <p>Email: {user.email}</p>
              // </li>
            
          ))}
        </ul>
      </div>
    </section>
  )
}

export default UsersSection
