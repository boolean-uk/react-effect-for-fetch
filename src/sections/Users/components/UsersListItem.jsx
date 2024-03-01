function UsersListItem(properties) {
    return (
        <li style={{background: properties.info.favouriteColour}}>
            <img src={properties.info.profileImage} alt={properties.info.firstName} />
            <h3>{properties.info.firstName + " " + properties.info.lastName}</h3>
            <p>Email: {properties.info.email}</p>
        </li>
    )
}

export default UsersListItem
