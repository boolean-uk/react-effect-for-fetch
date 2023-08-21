import UsersListItem from "./UsersListItem"

function getBackgroundColor(gender) {
    return gender === 'male' ? 'bg-blue' : 'bg-pink'
  }

function UsersList(props) {
    if (!props.users) {
        return null
    }
    return (
        <ul class="users-list">
            {props.users.map((user) => (
                <li key={user.id}
                class={getBackgroundColor(user.gender)}>
                    <UsersListItem user={user} />
                </li>
            ))}
        </ul>
    )
}
export default UsersList