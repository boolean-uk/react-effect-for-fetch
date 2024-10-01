function UsersListItem({user}) {
    return (
    <li style={{background: user.favouriteColour }}>
        <img
        src = {user.profileImage}
        alt = {`${user.firstName} ${user.lastName}`}
        />
        <div>
            <h3>{user.firstName} {user.lastName}</h3>
            <p>{user.email}</p>
        </div>
    </li>
    )
}
export default UsersListItem;
