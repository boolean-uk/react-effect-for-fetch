import UsersListItem from "./UsersListItem";

// eslint-disable-next-line no-unused-vars
const UsersList = ({ data }) => {
    return (
        <ul className="users-list">
            {data.map((user) => (
                <UsersListItem key={user.id} user={user} />
            ))}
        </ul>
    );
};

export default UsersList;
