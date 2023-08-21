function UsersListItem({ users }) {
    return (
        <>
            {
                users.map((user, idx) => {
                    return (
                        <li
                            key={idx}
                            className={user.gender === "male" ? "bg-blue" : "bg-pink"}
                        >
                            <img
                                src={`${user.picture.large}`}
                                alt={`${user.name.first} ${user.name.last}`}
                            />
                            <h3>
                                {user.gender === 'male' ? 'Mr. ' : 'Mrs. '}
                                {`${user.name.first} ${user.name.last}`}
                            </h3>
                            <p>
                                Email:
                                {user.email}
                            </p>
                        </li>
                    )
                })
            }
        </>

    )
}
export default UsersListItem