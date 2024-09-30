export default function UsersListItem({
    usersItem: { firstName, lastName, email, jobTitle, street, city, latitude, longitude, favouriteColour, profileImage }
}) {
    return (
        <li>
            <article className="UsersListItem" style={{ backgroundColor: favouriteColour }}>
                <h3>{firstName} {lastName}</h3>
                <h4>{jobTitle}</h4>
                <p>
                    <img src={profileImage} alt={`${firstName} ${lastName}`} />
                </p>
                <p>
                    <strong>Email:</strong> {email}
                </p>
                <p>
                    <strong>Location:</strong> {street}, {city} (Lat: {latitude}, Long: {longitude})
                </p>
            </article>
        </li>
    );
}
