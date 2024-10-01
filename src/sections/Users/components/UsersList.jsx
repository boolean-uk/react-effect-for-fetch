import UsersListItem from "./UsersListItem";

export default function UsersList({ users }) {
    return (
        <ul>
            {users.map((user, i) => (
                <UsersListItem usersListItem={user} key={i} />
            ))}
        </ul>
    );
};
