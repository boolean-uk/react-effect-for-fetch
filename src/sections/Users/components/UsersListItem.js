function UsersListItem(props) {

    return(
        <li class={props.person.gender === "male"?"bg-blue":"bg-pink"}>
        <img
          src={props.person.picture.large}
          alt="Ritthy Ryan"
        />
        <h3>{props.person.name.title} {props.person.name.first} {props.person.name.last}</h3>
        <p>Email: {props.person.email}</p>
      </li>
    )
}
export default UsersListItem