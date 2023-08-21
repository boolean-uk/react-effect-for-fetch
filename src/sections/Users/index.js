import { useEffect, useState } from "react"
import UsersList from "./components/UsersList"

function UsersSection() {

  const [userInfo, setUserInfo] = useState([])
  
  async function getUserInfo() {
    const retrieveUser = await fetch('https://randomuser.me/api/?results=12')
    const userData= await retrieveUser.json()
    setUserInfo(userData.results)
    console.log("getting user", userData.results)
  }

  useEffect(() => {
    getUserInfo()
    console.log("User Info retrieved")
  }, [])

  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <UsersList data ={userInfo} />
      </div>
    </section>
    
  )
}

export default UsersSection
