import UsersListItem from "./UsersListItem";

export default function UsersList({ users }) {
    return (
        <ul className="users-list">
            {
                users.map((user, index) => (
                    <UsersListItem key={index} user={user} index={index} />
                ))
            }
        </ul>
    )
}