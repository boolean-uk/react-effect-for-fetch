import { useEffect, useState } from "react"
import UsersList from "./components/UsersList"

function UsersSection() {
  const[people,setPeople] = useState([])

  async function getPeople() {
    const response = await fetch("https://randomuser.me/api/?results=10&inc=gender,name,email,picture")
    const json = await response.json()
    setPeople(json.results)
    console.log(people)
  }

  useEffect(() => {
    getPeople()
  },[])

  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        {people !== null && <UsersList people={people}/>}
      </div>
    </section>
  )
}

export default UsersSection
