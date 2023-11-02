import { useEffect, useState } from "react"


function RenderUsers () {

    const [users, setUsers] = useState([])

    const getUsers = () => {
      fetch('https://randomuser.me/api/?results=10')
        .then(res => res.json())
        .then(data => setUsers(data.results))
    }
  
    useEffect(getUsers, [])

    return (

    users.map((user, index) => (
    <li key={index} className={`${user.gender}`}>
      <img
        src= {`${user.picture.large}`}
        alt="Ritthy Ryan"
      />
      <h3>{`${user.name.title} ${user.name.first} ${user.name.last}`}</h3>
      <p>Email: {user.email}</p>
    </li>
  ))
    
    )
}

export default RenderUsers