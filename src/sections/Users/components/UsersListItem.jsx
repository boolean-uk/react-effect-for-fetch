function UsersListItem({user}){
    return(
        <li style ={{background: user.favoriteColour}}>
            <img
            src = {user.profileImage}
            alt = {user.firstName + user.lastName}
            />
            <h3>{user.firstName}</h3>
            <p>{"Email: " + user.email}</p>
        </li>
    )
}

export default UsersListItem