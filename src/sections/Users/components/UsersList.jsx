import UsersListItem from "./UsersListItem";

export default function UsersList({ users }) {
    return (
        <ul className="users-list">
            {users.map((usersListItem, id) => (
                <UsersListItem usersItem={usersListItem} key={id}/>
            ))}
        </ul>

    );
  }