function UsersListItem(props) {
    return (
        <li className={props.user.gender === "male" ? "bg-blue" : "bg-pink"} key={props.index}>
            <img
                src={props.user.picture.large}
                alt={props.user.name.first + " " + props.user.name.last}
            />
            <h3>Mr {props.user.name.first + " " + props.user.name.last}</h3>
            <p>Email: {props.user.email}</p>
        </li>
    );
}

export default UsersListItem;
