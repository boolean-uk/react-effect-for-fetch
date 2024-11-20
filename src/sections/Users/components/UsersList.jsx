import UsersListItemComponent from "./UsersListItem"

export default function UsersListComponent(props) {
    const { users } = props
    return (
        <ul className="users-list">
            {
                users.map((user, index) => (
                    <UsersListItemComponent key={index} user={user} index={index}/>
                ))
            }
        </ul>
    )
}