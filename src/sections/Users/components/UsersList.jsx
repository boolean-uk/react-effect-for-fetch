import { useEffect, useState } from "react"
import UsersListItem from "./UsersListItem"



export default function UsersList(){
const [data, setData] = useState([])


useEffect(() => {
    fetch('https://boolean-api-server.fly.dev/angustownsley/contact')
    .then(response => response.json())
    .then(json => setData([...json]))
    .catch(new Error("Error in contact fetch"))
  }, [])

  console.log(data)

return(
<ul className="users-list">
{data.map((e, index) => {
     return(<UsersListItem e={e} key={index}/> )
   })}
</ul>
)}