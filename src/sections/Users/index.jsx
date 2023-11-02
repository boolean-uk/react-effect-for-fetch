import RenderUsers from "./components/UsersListItem.jsx"

function UsersSection() {

  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <ul className="users-list">
          <RenderUsers />
        </ul>
      </div>
    </section>
  )
}

export default UsersSection
