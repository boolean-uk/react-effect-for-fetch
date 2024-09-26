import UsersListItem from "./UsersListItem";

function UsersList(props) {
    const { usersData } = props

    return (
      <ul className="users-list">
        {usersData.map((user, index) => (
            <UsersListItem 
                key={index}
                user={user}
            />
        ))}
      </ul>
    );
}

export default UsersList