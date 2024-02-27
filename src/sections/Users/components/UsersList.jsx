import UsersListItem from "./UsersListItem";
function UsersList({ userData }) {
  return (
    <div className="scroll-container">
      <ul className="users-list">
        {userData.map((user, index) => (
          <UsersListItem key={index} user={user} />
        ))}
      </ul>
    </div>
  );
}

export default UsersList;
