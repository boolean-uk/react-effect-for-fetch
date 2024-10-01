

export default function UsersListItem({
    usersListItem : {firstName, lastName, gender, email, jobTitle, street, city, latitude, longitude, favouriteColour, profileImage}
    
}){
    return (
        <div className="scroll-container">
        <ul className="users-list">
          <li style={{ backgroundColor: favouriteColour}}>
            <img
              src={profileImage}
              alt={`${firstName} ${lastName}`}
            />
            <h3>{firstName} {lastName}</h3>
            <p>Email: {email}</p>
          </li>
        </ul>
      </div>
    )
}