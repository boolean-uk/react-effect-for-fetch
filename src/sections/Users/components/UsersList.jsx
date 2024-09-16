import UsersListItem from "./UsersListItem";

function UsersList({ users }) {
  return (
    <ul>
      {users.map((user) => (
        <UsersListItem key={user.id} user={user} />
      ))}
    </ul>
  );
}

export default UsersList;
