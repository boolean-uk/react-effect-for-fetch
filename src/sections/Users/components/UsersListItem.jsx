function UsersListItem(props)
{
    return(
        <li style={{backgroundColor: props.user.favouriteColour}}>
            <img
              src={props.user.profileImage}
              alt={props.user.firstName + " " + props.user.lastName}
            />
            <h3>{props.user.firstName} {props.user.lastName}</h3>
            <p>Email: {props.user.email}</p>
          </li>
    )
}

export default UsersListItem