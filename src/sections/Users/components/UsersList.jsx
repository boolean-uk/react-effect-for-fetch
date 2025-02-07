import UsersListItem from "./UsersListItem";

function UsersList({ users }) {
  return (
    <ul className="users-list">
      {users.map((user, index) => {
        return <UsersListItem user={user} key={index} />;
      })}
    </ul>
  );
}

export default UsersList;
