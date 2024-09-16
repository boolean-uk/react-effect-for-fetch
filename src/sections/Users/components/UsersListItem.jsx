function UsersListItem( properties ){
    const { user, index } = properties

    const fullName = user.firstName + " " + user.lastName;

    return(
        <><li key={index} style={{background: user.favouriteColour}}/>
            <img src={`${user.profileImage}`}
                alt={fullName}
            />
            <h3>{fullName}</h3>
            <p>Email: {user.email}</p>
        </>
    )
}
export default UsersListItem