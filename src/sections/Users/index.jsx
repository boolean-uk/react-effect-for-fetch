import UsersList from "./components/UsersList"


function UsersSection(props) {
const users = props.users;

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
