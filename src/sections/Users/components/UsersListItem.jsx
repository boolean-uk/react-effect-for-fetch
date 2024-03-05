function UserListItem({data}) {
    const imageURL = data ? data.profileImage : "";
    const email = data ? data.email : "";
    const firstName = data ? data.firstName : "";
    const lastName = data ? data.lastName : "";
    const favColour = data ? data.favouriteColour : "";
    return(
        <li style={{background: favColour}}>
          <img
            src={imageURL}
          />
          <h3>{firstName + " " + lastName}</h3>
          <p>Email: {email}</p>
        </li>
    )
}

export default UserListItem