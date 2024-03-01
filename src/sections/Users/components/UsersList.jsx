import UsersListItem from "./UsersListItem";

function UsersList({ users }) {
  return (
    <ul>
      {users.map((user, index) => (
        <UsersListItem key={index} user={user} />
      ))}
    </ul>
  );
}

export default UsersList;
