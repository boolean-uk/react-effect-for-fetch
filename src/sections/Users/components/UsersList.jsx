import UsersListItem from "./UsersListItem";

export default function UsersList({ contacts }) {
  return (
    <ul className="users-list">
      <UsersListItem contacts={contacts} />
    </ul>
  );
}
