export default function UsersListItem({ user, index }) {
    return (
        <li key={index} style={{ background: user.favouriteColour }}>
            <img src={`https://www.gravatar.com/avatar/${user.email}?s=120&d=identicon`} alt={user.name} />
            <h3>{`${user.firstName} ${user.lastName}`}</h3>
            <p>Email: {user.email}</p>
        </li>
    )
}