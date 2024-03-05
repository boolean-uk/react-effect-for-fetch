import UsersListItem from "./components/UsersListItem"

export default function UsersSection() {
  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <UsersListItem />
      </div>
    </section>
  )
}