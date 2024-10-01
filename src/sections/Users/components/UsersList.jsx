const UsersList = ({ userList }) => {


    return (
        <section>
            <h2>Users Section</h2>
            <div className="scroll-container">
                <ul className="users-list">
                    {userList.map((user) => (
                        <li key={user.id} style={{ background: user.favouriteColour }}>
                            <img
                                src={`https://www.gravatar.com/avatar/${user.profileImage}`}
                                alt={`${user.firstName} ${user.lastName}`}
                            />
                            <h3>{`${user.firstName} ${user.lastName}`}</h3>
                            <p>Email: {user.email}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default UsersList;
