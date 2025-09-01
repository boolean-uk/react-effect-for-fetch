function UsersListItem(props) {
    const { user, fullName } = props
  return (
    <li style={{ backgroundColor: user.favouriteColour}}>
        <img
        src={user.profileImage}
        alt={user.firstName + user.lastName}
        />
        <h3>Mx. {fullName}</h3>
        <p>Email: {user.email}</p>
    </li>
  )
}

export default UsersListItem