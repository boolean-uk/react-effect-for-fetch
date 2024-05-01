export default function UserListItem({ user }) {
    return (
        <li style={{ background: `${user.favouriteColour}`}}>
            <img
                src={`https://www.gravatar.com/avatar/${user.email}?s=120&d=identicon`}
                alt={`${user.firstName} ${user.lastName}`}
            />
            <h3>{user.gender.toLowerCase().includes('female') ? 'Ms' : 'Mr'} {user.firstName} {user.lastName}</h3>
            <p>Email: {user.email}</p>
        </li>
    )
}