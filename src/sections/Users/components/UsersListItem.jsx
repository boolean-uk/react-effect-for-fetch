export default function UsersListItem({users}) {
    return (
        <>
        {users.map((user, index) => (
            <li className={user.gender === "male"? "bg-blue" : "bg-pink"} key={index}>
                <img src={user.picture.medium} alt={user.name.first} />
                <h3>{user.name.title} {user.name.first} {user.name.last}</h3>
                <p>{user.email}</p>
            </li>))}
        </>
    )}