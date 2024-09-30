import { useState, useEffect } from "react"
import UserList from "./components/UsersList"

function UsersSection() {
  const [userData, setUserData] = useState([])
  useEffect(() => {
    fetch("https://boolean-uk-api-server.fly.dev/Daniel/contact").then(Response => {
    if(Response.ok){
      return Response.json()
    }
    }).then(data => {
      setUserData(data)
    }).catch(error => {
      console.error("Error fetching data: ", error)
    })
  }, [])
  console.log(userData)
  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <UserList data={userData}/>
      </div>
    </section>
  )
}

export default UsersSection
