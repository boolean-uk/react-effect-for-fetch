import UsersListItem from "./UsersListItem"

export default function UsersList({ usersList }) {
    console.log(usersList);

    return (
        <ul className="users-list">
            {usersList && usersList.map((usersListItem, i) =>
                <UsersListItem usersListItem={usersListItem} key={i}/>
            )}
        </ul>
    )
    
}