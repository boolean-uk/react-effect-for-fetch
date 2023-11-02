function UsersList({ users}) {
    
    function changeBgColour(user) {
        if (user.gender === 'male') return "bg-blue"
        else return "bg-pink"
      }
    
      function formatName(user) {
        const nameGroup = user.name
        return `${nameGroup.title} ${nameGroup.first} ${nameGroup.last}`
      }
    
    return (
        <ul className="users-list">
          {users.map((user, index) => 
            <li key={index} className={changeBgColour(user)}>
            <img
              src={user.picture.medium}
              alt={`${user.name.first} ${user.name.last}`}
            />
            <h3>{formatName(user)}</h3>
            <p>Email: {user.email}</p>
          </li>
          )}
        </ul>
    )
}

export default UsersList