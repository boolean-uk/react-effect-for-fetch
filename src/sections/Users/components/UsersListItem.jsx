
const UserListItem = ({user}) => {
    const favcol = user.favouriteColour
    return (
        <li style={{background: favcol}}>
            <img
                // src={`https://www.gravatar.com/avatar/${user.email}?s=120&d=identicon`}
                src={user.profileImage}
                alt={`${user.firstName} ${user.lastName}`}
            />
            <h3>{user.firstName} {user.lastName}</h3>
            <p>Email: {user.email}</p>
        </li>

    )
}

export default UserListItem