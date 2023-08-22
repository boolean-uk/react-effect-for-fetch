// import { setupDirect } from "@testing-library/user-event/dist/types/setup/setup"
import { useEffect, useState } from "react"


function UsersSection() {
  
  const [userData, setUserData] = useState([])
  async function users(){
    const userResponse = await fetch('https://randomuser.me/api/?results=16')
    const userJson = await userResponse.json()
    console.log(userJson.results)
    setUserData(userJson.results)
    
    
  }
  
  useEffect(()=>{
    users()
  },[])
  
  return (

    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <ul className="users-list">
          {
            userData.map((user) => {
              return <li class="bg-blue">
              <img
              src={user.picture.thumbnail}
              alt="Ritthy Ryan"
              width='100'
            />
            <h3>{user.name.first} {user.name.last}</h3>
            <p>Email: {user.email} </p>
        </li>
            })
          }

          
      </ul>
      
      </div>
    </section>
  )
}

export default UsersSection
