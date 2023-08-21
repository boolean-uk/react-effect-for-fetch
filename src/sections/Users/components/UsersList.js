import UsersListItem from "./UsersListItem"

function UsersList(props) {
    return(
    <ul class="users-list">
        {props.people.map((person) => <UsersListItem person={person}/>)}
    </ul>
    )
}
export default UsersList