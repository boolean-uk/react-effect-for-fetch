export default function UsersListITem({user}) {
    return (
        <>
            {user.map((user, index) =>
          <li style={{background: `${user.favouriteColour}`}} key={index}>
            <img src={user.profileImage} alt={`${user.firstName} ${user.lastName}`}/>
            <h3>{`${user.firstName} ${user.lastName}`}</h3>
            <p>{user.email}</p>
          </li> )}
        </>
    )
}