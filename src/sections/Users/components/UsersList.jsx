import UserListItem from "./UsersListItem";

const UserList = ( {data} ) => {
    return (
        <ul className="users-list" style ={{listStyleType: 'none'}}>
          {data.map( (user, index) => (
                <UserListItem 
                    key={index}
                    image={user.profileImage}
                    firstName={user.firstName}
                    lastName={user.lastName}
                    email={user.email}
                    favColor={user.favouriteColour}
                />
          ))}
        </ul>
    )
} 

export default UserList;