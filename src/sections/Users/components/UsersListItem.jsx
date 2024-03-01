

function UsersListItem(props) {


    const {user} = props ?? {};

  return (

    <li style={{background: user.favouriteColour}}>
        <img
        src={`https://www.gravatar.com/avatar/${user.profileImage}`}
        alt= {user.firstName} />
        <h3>{user.gender + ", " + user.firstName + " " + user.lastName} </h3>
        <p>Email: {user.email}</p>
    </li>
    
  )
}

export default UsersListItem
