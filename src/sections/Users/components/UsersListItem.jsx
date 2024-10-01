
export default function UsersListItem({user, i}) {
    return (
        <>
            <li key={i} style={{background: user.favouriteColour}}>
                <img src={user.profileImage} alt={`${user.firstName} ${user.lastName}`} />
                <h3>{`${user.firstName}  ${user.lastName}`}</h3>
                <p>Email: {user.email}</p>
            </li>
        </>
    )
}