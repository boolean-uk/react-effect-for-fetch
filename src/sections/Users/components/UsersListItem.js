function UsersListItem(props) {
    const user = props.user
    const name = `${user.name.title} ${user.name.first} ${user.name.last}`
    return (
        <li className={(user.gender === 'male')?'bg-blue':'bg-pink'}>
            <img
              src={user.picture.medium}
              alt={name}
            />
            <h3>{name}</h3>
            <p>Email: {user.email}</p>
        </li>
    )
}

export default UsersListItem