function UsersListItem({ user }) {
  const gravatarUrl = `https://www.gravatar.com/avatar/${user.email}?s=120&d=identicon`
  const fullName = `${user.title} ${user.firstName} ${user.lastName}`

  return (
    <li style={{ background: user.favouriteColour }}>
      <img src={gravatarUrl} alt={fullName} />
      <h3>{fullName}</h3>
      <p>Email: {user.email}</p>
    </li>
  )
}

export default UsersListItem