function UsersListItem({ user }) {
    return (
        <>
            <li>
                <img src={user.profileImage} alt={user.name} />
                <h3>{`${user.firstName} ${user.lastName}`}</h3>
                <p>{user.email}</p>
            </li>
        </>
    );
}

export default UsersListItem;