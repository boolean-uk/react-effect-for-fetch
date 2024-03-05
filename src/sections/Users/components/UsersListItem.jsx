function UsersListItemComponent({info}) {
  return (
    <li style={{ background: info.favouriteColour }}>
    <img
      src={info.profileImage}
      alt={`${info.firstName} ${info.lastName}`}
    />
    <h3>{`${info.firstName} ${info.lastName}`}</h3>
    <p>Job Title: {info.jobTitle}</p>
    <p>Email: {info.email}</p>
  </li>
  )
}

export default UsersListItemComponent