export default function UsersListItem({ user }) {
    const { firstName, lastName, email, profileImage, favouriteColour } = user;

    return (
        <li style={{ backgroundColor: favouriteColour }}>
            <img
                src={profileImage}
                alt={`${firstName} ${lastName}`}
            />
            <h3>{firstName} {lastName}</h3>
            <p>Email: {email}</p>
        </li>
    );
}