import { useEffect, useState } from "react"
import UsersList from "./components/UsersList"

function UsersSection() {
  const [contacts, setContacts] = useState([])

  useEffect(() => {

    fetch('https://boolean-uk-api-server.fly.dev/test/contact')
    .then(res => res.json())
    .then(data => setContacts(data))

  }, [])

  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">

        <UsersList contacts={contacts}/>

      </div>
    </section>

  )
}

export default UsersSection
