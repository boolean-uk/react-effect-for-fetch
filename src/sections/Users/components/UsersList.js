import UsersListItem from "./UsersListItem";

function UsersList({ userData }) {
  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <ul className="users-list">
          {userData.results.map((user) => (
            <UsersListItem key={user.login.uuid} user={user} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default UsersList;
