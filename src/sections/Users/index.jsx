import UsersList from './components/UsersList'
import { useEffect, useState } from 'react'

function UsersSection() {

  const [users, setUsers] = useState([])


  useEffect(() => {
    const getData = async () => {
      const data = await fetch ('https://boolean-uk-api-server.fly.dev/MrStashy/contact')
      const json = await data.json()
      setUsers(json)
    }
    getData()
  }, [])

  return (
    <section>
  <h2>Users Section</h2>
  <div className="scroll-container">
    <UsersList users={users}/>
    
  </div>
</section>
  )
}

export default UsersSection
