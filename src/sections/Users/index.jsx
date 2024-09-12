import UserListItem from "./components/UsersListItem"

function UsersSection() {
  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container"> <ul className="art-list">
          <UserListItem/>
        </ul></div>
     
    </section>
  )
}

export default UsersSection
