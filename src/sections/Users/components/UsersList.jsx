import UsersListItem from "./UsersListItem";

export default function UsersList({ data }) {
  return (
    <ul className="users-list">
      {data.map((userId, index) => (
        <UsersListItem key={index} data={userId} />
      ))}
    </ul>
  );
}
