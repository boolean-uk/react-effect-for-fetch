function UsersListItem ({ thumbnail, name, email, gender }) {

    const backgroundColor = (gender) => {
        if (gender === "male") {
            return "bg-blue"
        } else {
            return "bg-pink"
        }
    }
    return (
        <>
        <li className={backgroundColor(gender)}>
            <img
                src={thumbnail}
                alt={name}
            />
            <h3>{name}</h3>
            <p>{email}</p>
            </li>
      </>
    )
}

export default UsersListItem