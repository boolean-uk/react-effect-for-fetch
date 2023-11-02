export default function({ users }) {
    return(
        <>
        {users.map((user, idx) =>
            <li className={user.gender === "male" ? "bg-blue" : "bg-pink"} key={idx}>
                <img
                src={user.picture.medium}
                alt={`${user.name.first} ${user.name.last}`}
                />
                <h3>{`${user.name.title} ${user.name.first} ${user.name.last}`}</h3>
                <p>{user.email}</p>
            </li> 
        )}
        </>
    )
}