export default function UsersListItem({e}) {
    return (
        <>
            <li style={{background: "#0d7f26"}}>
                <img
                    src={e.profileImage}
                    alt={`${e.firstName} ${e.lastName}`}
                />
                <h3>{`${e.firstName} ${e.lastName}`}</h3>
                <p>{`Email: ${e.email}`}</p>
            </li>

        </>
    )
}
