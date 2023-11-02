import {useState, useEffect} from 'react'
import UsersList from './components/UsersList'


function UsersSection() {

  const [userData, setUserData] = useState([])

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=10')
      .then(res => {
        return res.json()
      })
      .then(data => {
        setUserData(data.results)
        console.log(data)
      })
  }, [])
  
  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        {userData.map((userItem) => {
          return (
            <UsersList 
              key={userItem.login.uuid}
              thumbnail={userItem.picture.large}
              name={userItem.name.title + " " + userItem.name.first + " " + userItem.name.last}
              email={userItem.email}
            />
          )
        })}
      </div>
    </section>
  )
}

export default UsersSection
