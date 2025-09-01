import UsersListItem from "./UsersListItem"

function UsersList({data}){

    return( 
        <>
            <ul className="users-list">
                {data?.map((user, i) => (
                <UsersListItem user={user} key={i} />
                ))}
            </ul>
        </>
    )   
}

export default UsersList;