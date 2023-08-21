function UsersListItem(props) {
    return (
        <>
        <img
            src={props.user.picture.medium}
            alt={`${props.user.name.first} ${props.user.name.last}`}
            />
            <h3>{`${props.user.name.title} ${props.user.name.first} ${props.user.name.last}`}</h3>
            <p>{props.user.email}</p>
        </>
    )
}
export default UsersListItem