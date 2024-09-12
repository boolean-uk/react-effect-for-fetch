import UsersListItem from "./UsersListItem";

function UsersList({ userData }) {
  return (
    <ul className="users-list">
      {userData.map((user, index) => (
        <UsersListItem key={index} user={user} />
      ))}
    </ul>
  );
}

export default UsersList;
