import UsersListItem from "./UsersListItem"

function UsersList(props) {

    const {users} = props ?? {};

  return (
  <section>
    <h2>Users Section</h2>
    <div className="scroll-container">
      <ul className="users-list">
        {users.map((user, index) => (
          <UsersListItem user={user} key={index}/>
        )) }

      </ul>
    </div>
  </section>
  )
}

export default UsersList
