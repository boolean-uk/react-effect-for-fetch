export default function UsersListItemComponent(props) {
    const { user, index } = props
    return (
        <li key={index} style={{background: user.favouriteColour}} >
            <img
                src={user.profileImage}
                alt={user.name}
            />
            <h3>{user.firstName + " " + user.lastName}</h3>
            <p>Email: {user.email}</p>
        </li>
    )
}