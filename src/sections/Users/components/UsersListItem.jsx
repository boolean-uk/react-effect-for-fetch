function UsersListItem({ user }) {

    return (
        <>
        <li style={{background: user.favouriteColour}}>
            <div className="frame">
                {user.profileImage ? (
                <img
                    src={user.profileImage}
                    alt={`${user.firstName} image`}
                />
                ) : (
                "No profile image"
                )}
            </div> 
            <h3>{(user.gender === "Male") ? (
                "Mr. " + user.firstName + " " + user.lastName
            ) : ("Mrs. " + user.firstName + " " + user.lastName)}</h3>
            <p>{"Email: " + user.email}</p>
        </li>
        </>
    );
}

export default UsersListItem;