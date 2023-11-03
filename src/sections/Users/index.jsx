import UserList from "./components/UsersList"

function UsersSection({userArr}) {
  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <UserList userArr={userArr}/>
      </div>
    </section>
  )
}

export default UsersSection
