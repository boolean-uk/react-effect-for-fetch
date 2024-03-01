import { useEffect, useState } from "react"
import UserList from "./components/UsersList"

function UsersSection() {

const [DBdata, setData] = useState(false)
const[userServerUrl, setServerUrl] = useState('https://boolean-api-server.fly.dev/carob16/contact')

useEffect(()=>{

  fetch('https://boolean-api-server.fly.dev/carob16/contact')
  .then(res => res.json())
  .then(data =>  setData(data))

},[userServerUrl])

  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
      
      <UserList dataList={DBdata}/>
      
     </div>
   
    </section>
  )
}

export default UsersSection
