export default function UsersListItem(props) {
  const { user } = props
  const fullName = `${user.name.first} ${user.name.last}`

  return (
    <li className={user.gender === 'male' ? 'bg-blue' : 'bg-pink'}>
      <img
        src={user.picture.thumbnail}
        alt={fullName}
      />
      <h3>
        {`${user.name.title} ${fullName}`}
      </h3>
      <p>Email: {user.email}</p>
    </li>
  )
}