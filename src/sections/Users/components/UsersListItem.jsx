
function UserListItem ( {firstName, lastName, gender, email, jobTitle,
        street, city, latitude, longitude, favouriteColour, profileImage, id} ) {
            
    return(
        <div>
            <li style={{background: favouriteColour}}>
                <img
                    src={`${profileImage}`}
                    alt={`${firstName} ${lastName}`}
                />
                <h3>{firstName } { lastName}</h3>
                <p>Email: {email}</p>
            </li>
        </div>
    )
}

export default UserListItem