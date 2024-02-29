import UsersListItem from "./UsersListItem.jsx"

const UsersList = ({list}) => {
    return (
        <ul className="users-list">
            {list?.map((entry, index) => 
                <UsersListItem key={index} entry={entry}/>
            )}
        </ul>
    )
}

export default UsersList