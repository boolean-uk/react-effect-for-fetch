import UsersListItem from "./UsersListItem";

export default function UsersList({ users }) {
  return (
    <ul className="users-list">
      {users &&
        users.length > 0 &&
        users.map((user, index) => <UsersListItem user={user} key={index} />)}
    </ul>
  );
}