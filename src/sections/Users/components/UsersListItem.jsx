function UsersListItem({imageURL, userName, favoriteColor, email}) {
    return(
        <>
        <li style={{ backgroundColor: favoriteColor }}>
        <img
          src={imageURL}
          alt={userName}
        />
        <h3>Mr {userName}</h3>
        <p>Email: {email}</p>
      </li>
        </>
    ) 
}
export default UsersListItem;