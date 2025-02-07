
const UsersListItem = (props) => {
    

    return (
        <li id={props.index} style={{background: "#0d7f26"}}>
            <img
            src={props.user.profileImage}
            alt={`${props.user.firstName} ${props.user.lastName}`}
            />
            <h3>{`${props.user.firstName} ${props.user.lastName}`}</h3>
            <p>Email: {`${props.user.email}`}</p>
        </li>
    )
}

export default UsersListItem