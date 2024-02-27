import UsersListItem from "./UsersListItem";

function UsersList({ user }) {
  return (
    <>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <ul className="users-list">
          {user.map((user, key) => {
            return <UsersListItem key={key} user={user} />;
          })}
        </ul>
      </div>
    </>
  );
}
export default UsersList;
