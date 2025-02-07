function UserListItem(props) {
    props = props.userItem
    const fullName = props.firstName +" " + props.lastName

    return (
        <li style={{ background: `${props.favouriteColour}` }}>
            <img
            src={props.profileImage}
            alt={fullName}
            />
            <h3>{props.firstName} {props.lastName}</h3>
            <p>Email: {props.email}</p>
      </li>
    )
}

export default UserListItem;