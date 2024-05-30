import UserList from "./components/UsersList"

function UsersSection({data}) {
  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
      <UserList data = {data}/>
      </div>
    </section>
  )
}

export default UsersSection
