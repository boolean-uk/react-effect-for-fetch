import UsersListItem from "./UsersListItem";

export default function UsersList({users}) {

    return(
        <>
            <ul className = "users-list">
                {users.map((user) => (
                    <UsersListItem user = {user} key = {user.id} />
                ))}
            </ul>
        </>
    )
}