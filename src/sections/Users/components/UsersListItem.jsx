
function UsersListItem({item}, key) {

    return (
        <li key={key} style={{background: item.favouriteColour}}>
            <img
            src={item.profileImage}
            alt={`${item.firstName} ${item.lastName}`}
            />
            <h3>{`${item.firstName} ${item.lastName}`}</h3>
            <p>Email: {item.email}</p>
        </li>
    )
}

export default UsersListItem