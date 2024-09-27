export default function UsersListItem({ user }) {
    const fullname = `${user.firstName} ${user.lastName}`;
    const favouriteColour = `${user.favouriteColour}`
    return (
      <li style={{background: favouriteColour}}>
        <img className= "icon" src={user.profileImage} alt={fullname} />
        <h3>{fullname}</h3>
        <p>Email: {user.email}</p>
      </li>
    );
  }