export default function UsersListItem({ usersListItem: { firstName, lastName, favouriteColour, profileImage, email }
}) {
    return (
        <li style={{ background: favouriteColour }}>
            <img src={profileImage} alt={firstName + ' ' + lastName} />
            <h3>{firstName + ' ' + lastName}</h3>
            <p>{email}</p>
        </li>
    )
}