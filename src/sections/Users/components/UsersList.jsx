export default function UsersList(props) {
    return (
        <ul className="users-list">
            {props.children}
        </ul>
    )
}