export default function UsersListItem({e}) {
    return (
        <>
            <li style={{background: e.favouriteColour}}>
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
