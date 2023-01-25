import UserListItem from "./UsersListItem"
export default function UserList(props) {
    return (
        <ul className="users-list">
            {props.users.map((user, i) => {
                return (
                    <UserListItem user={user} key={i} />
                )
            })}
            
        </ul>
    )
}