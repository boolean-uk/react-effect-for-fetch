import UsersListItem from "./UsersListItem"

function UsersList({ data }) {

    return (
        <>
        <ul className="users_list">
            {data.map((user, index) => (
                <UsersListItem 
                    img={user.profileImage}
                    name={user.firstName+ " " + user.lastName}
                    email={user.email}
                    color={user.favouriteColour} 
                    key={index}
                />
            ))}
        </ul>
        </>
    )
}

export default UsersList
