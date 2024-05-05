import React from "react"
import UserListItem from "./components/UsersListItem"
import UsersList from "./components/UsersList"

function UsersSection() {

  const[userList, setUserList]= React.useState([])

  async function fetchApiData() {

    const response = await fetch('https://boolean-uk-api-server.fly.dev/iscreamvann/contact')
    const data = await response.json()
    console.log(data)

    setUserList(data)
  }

  React.useEffect(() => {fetchApiData()}, [])
  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <UsersList>
          {userList.map((user) => {return (<UserListItem user={user}/>)})}
        </UsersList>
        </div>
    </section>
  )
}

export default UsersSection
