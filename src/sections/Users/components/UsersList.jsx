import UserListItem from "./UsersListItem";

export default function UserList({ user }) {
    return (
        <ul className="users-list">
            <UserListItem user={user} />
        </ul>
    )
}