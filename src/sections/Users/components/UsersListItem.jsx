function UsersListItem({
  usersItem: { firstName, lastName, email, profileImage, favouriteColour }
}) {
  return (
      <li style={{background: favouriteColour}}>
          <img
              src={profileImage}
              alt={firstName + " " + lastName}
          />
          <h3>{firstName + " " + lastName}</h3>
          <p>Email: {email}</p>
      </li>
  )
}

export default UsersListItem