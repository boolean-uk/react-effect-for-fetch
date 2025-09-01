
function UsersListItem({ img, name, email, color }) {

    return (
        <>
        <li style={{background:`${color}`}}>
            <img 
                src={img}
                alt={name}
            />
            <h3>{name}</h3>
            <p>Email: {email}</p>
        </li>
        </>
    )
}

export default UsersListItem
