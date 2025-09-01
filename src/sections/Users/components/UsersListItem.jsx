function UsersListItem({user : {favouriteColour, profileImage, firstName, lastName, email}}){

    return (
    <>
      <li style={{background: favouriteColour }}>
        <img
            src={profileImage}
            alt={firstName}
        />
        <h3>{`"${firstName} ${lastName}"`}</h3>
        <p>{` ${email}"`}</p>
      </li>
    </> 
    ) 
}

export default UsersListItem;