import UserListItem from "./UsersListItem";

function UserList({ users }) {
  return (
    <ul className="users-list">
      {users.map((user) => (
        <UserListItem key={user.id.value} user={user} />
      ))}
    </ul>
  );
}

export default UserList;
