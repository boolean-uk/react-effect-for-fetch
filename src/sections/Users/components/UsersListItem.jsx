const UsersListItem = ({entry}) => {
    return (
       <li style={{background: entry.favouriteColour}}>
            <img 
                src={entry.profileImage} 
                alt={entry.firstName + " " + entry.lastName}
            />
            <h3>{entry.gender === "Male" ? "Mr" : "Ms" + " " + entry.firstName + " " + entry.lastName}</h3>
            <p>Email: {entry.email}</p>
        </li>
    )
}

export default UsersListItem