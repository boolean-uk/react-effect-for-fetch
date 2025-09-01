const UserListItem = ({image, firstName, lastName, email, favColor}) => {
    return (
        <li style={{backgroundColor: `${favColor}`}}>
            <img src={image} alt={`${firstName} ${lastName}`}/>
            <h3>{`${firstName} ${lastName}`}</h3>
            <p>Email: {email}</p>
        </li>
    )
}

export default UserListItem;