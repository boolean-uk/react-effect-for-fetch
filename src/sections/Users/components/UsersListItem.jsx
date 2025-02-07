function UsersListItem({ user }){


    return (

        <>
        
            <li key={user.id} style={{ backgroundColor: user.favouriteColour }}>
                <img
                src={user.profileImage}
                />
                <h3>{user.firstName} {user.lastName}</h3>
                <p>{user.email}</p>
            </li>
        
        </>

    )
}

export default UsersListItem