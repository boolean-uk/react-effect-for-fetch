import UsersListItem from "./UsersListItem"

export default function UsersList({ users }) {

    return (
        <ul className="users-list">
            <UsersListItem users={users} />
        </ul>
    )
}