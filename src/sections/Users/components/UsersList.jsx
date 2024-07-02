import UsersListItem from "./UsersListItem";

function UsersList(props) {
  return (
    <ul className="users-list">
      {props.users.map((user) => (
        <UsersListItem key={user.id} user={user} />
      ))}
    </ul>
  );
}

export default UsersList;
