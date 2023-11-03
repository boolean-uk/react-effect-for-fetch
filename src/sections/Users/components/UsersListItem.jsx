const UsersListItem = ({ user: { picture, name, email, gender } }) => {
    return (
        <li className={gender === "male" ? "bg-blue" : "bg-pink"}>
            <img src={picture} alt={name} />
            <h3>{name}</h3>
            <p>Email: {email}</p>
        </li>
    );
};

export default UsersListItem;
