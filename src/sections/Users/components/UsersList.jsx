import { UsersListItem } from "./UsersListItem"

export const UsersList = ({ users }) => {
  return (
    <ul className="users-list">
      {users.map((user, index) => (
        <UsersListItem key={index} user={user} />
      ))}
    </ul>
  );
}