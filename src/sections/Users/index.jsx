import UsersList from "./components/UsersList"

function UsersSection(props) {

  const { usersSection } = props

  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <UsersList usersSection={usersSection}/>
      </div>
    </section>
  )
}

export default UsersSection
