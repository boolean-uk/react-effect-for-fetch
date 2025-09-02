
function UsersListItem({user}) {
  return (
    <li style={{ background: user.favouriteColour }}>
          <img
            src={user.profileImage}
            alt={user.firstName.concat(" ").concat(user.lastName)}
          />
          <h3>{user.firstName.concat(" ").concat(user.lastName)}</h3>
          <p>Email: {user.email}</p>
    </li>
  )
}

export default UsersListItem