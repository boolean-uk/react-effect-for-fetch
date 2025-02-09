
export default function ArtListItem(props) {

    const firstName = props.usersListItem.firstName;
    const lastName = props.usersListItem.lastName;
    const email = props.usersListItem.email;
    const profileImage = props.usersListItem.profileImage;


    return (
        <>
        <li style={{background: props.usersListItem.favouriteColour}}>
        <img
          src={profileImage}
          alt={firstName + " " + lastName}
        />
        <h3>Mr {firstName + " " + lastName}</h3>
        <p>Email: {email}</p>
      </li>
      </>
    )
    
}