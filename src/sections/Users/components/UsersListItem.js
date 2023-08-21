function UsersListItem(props) {
    const fullName = props.user.name.first + " " + props.user.name.last;
    return (
        <li
            className={props.user.gender === "male" ? "bg-blue" : "bg-pink"}
            key={props.index}
        >
            <img
                src={props.user.picture.large}
                alt={fullName}
            />
            <h3>Mr {fullName}</h3>
            <p>Email: {props.user.email}</p>
        </li>
    );
}

export default UsersListItem;
