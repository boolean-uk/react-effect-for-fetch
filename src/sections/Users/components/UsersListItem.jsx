
export default function UsersListItem ({ user }){
    const fullName = `${user.firstName} ${user.lastName}`;
    return (
        <li>
            <img src={user.profileImage} alt={fullName} />
            <h3>{fullName}</h3>
            <p>Email: + {user.email}</p>
        </li>
    )
}