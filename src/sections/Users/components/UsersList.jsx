import UsersListItem from "./UsersListItem";

function UsersList(props) {
    const users = props.users;

  return (
    <ul className="users-list">
        {users?.map((user, index) => (
                <UsersListItem key={index} user={user}/>
            ))}

    </ul>
  );
}

export default UsersList