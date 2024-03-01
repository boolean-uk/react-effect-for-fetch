import UsersListItem from "./UsersListItem";

function UsersList(props) {
  return (
    <ul className="users-list">
      {props.users.map((user, index) => {
        return <UsersListItem user={user} key={index} />;
      })}
    </ul>
  );
}

export default UsersList;
