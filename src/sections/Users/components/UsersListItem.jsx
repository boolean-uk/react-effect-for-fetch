

export default function UsersListItem({ user }) {
    const { id, firstName, lastName, favouriteColour, email, profileImage } = user;

    return (
        <li style={{ backgroundColor: favouriteColour }}>
            <img
                src={profileImage}
                alt={`${firstName} ${lastName}`}
            />
            <h3>{`${firstName} ${lastName}`}</h3>
            <p>{`Email: ${email}`}</p>
        </li>
    );
}