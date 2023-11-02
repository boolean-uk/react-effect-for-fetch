function User({user}) {

    return (
        <li className={`${user.gender}`}>
            <img
                src={`${user.picture.large}`}
                alt="Ritthy Ryan"
            />
            <h3>{`${user.name.title} ${user.name.first} ${user.name.last}`}</h3>
            <p>Email: {user.email}</p>
        </li>
    )
}
export default User