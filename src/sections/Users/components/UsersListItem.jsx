function UserListItem({users}) {
    return(
        <>
        {users.map((user) => (
            <li
              key={user.login.username}
              className={user.gender === 'male' ? 'bg-blue' : 'bg-pink'}>
              <img src={user.picture.thumbnail} alt={user.name.first} />
              <h3>{user.name.first} {user.name.last}</h3>
              <p>{user.email}</p>
            </li>
          ))}
        </>
    )
}
export default UserListItem