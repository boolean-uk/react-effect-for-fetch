
export default function UsersListItem({props}){
    return(
        <>
        <li style={{background: props.favouriteColour}}>
            <img src={props.profileImage} alt={props.firstName + props.lastName}/>
            <h3>{props.firstName + " " + props.lastName}</h3>
            <p>Email: {props.email}</p>
        </li>
        </>
    );
}