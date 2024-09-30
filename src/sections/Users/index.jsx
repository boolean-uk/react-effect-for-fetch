import { useState, useEffect } from "react"
import UsersList from "./components/UsersList"
function UsersSection() {

  const [userData, setUserData] = useState()

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://boolean-uk-api-server.fly.dev/espensl2000/contact')
      const data = await response.json()
      setUserData(data)
    }
    fetchData()  
  }, [])

  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">

        {userData && 
          <>
            <UsersList users={userData}/>  
          </>
        }

      </div>
    </section>
  )
}

export default UsersSection
