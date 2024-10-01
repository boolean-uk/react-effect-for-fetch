import UsersListItem from "./UsersListItem"

export default function UsersList({user}) {
    return (
        <>
            {user.map((user, i) => (
                <UsersListItem user={user} key={i}/>
            ))}
        </>
    )
}