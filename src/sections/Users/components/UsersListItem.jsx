export default function UsersListItem({ usersListItem: { firstName, lastName, gender, email, favouriteColour, profileImage, id } }) {
    
    return (
      <li id={id} style={{ backgroundColor: favouriteColour }}>
        <img
          src={profileImage}
          alt={`${firstName} ${lastName}`}
        />
        <h2>{`${firstName} ${lastName}`}</h2>
        <h3>{gender}</h3>
        <p>{email}</p>
      </li>
    );
  }
  