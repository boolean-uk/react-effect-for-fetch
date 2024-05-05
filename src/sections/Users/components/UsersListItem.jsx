export default function UserListItem(props) {
    return (<>
    <li style={{background: props.user.favouriteColour}}>
    <img
       src={props.user.profileImage}
    />
    <h3>Mr {props.user.firstName} {props.user.lastName}</h3>
    <p>Email: {props.user.email} </p>
  </li>
</>)
}