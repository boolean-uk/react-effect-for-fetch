import PropTypes from 'prop-types'

export default function UsersListItem({user})
{
    console.log("USER DATA", user)
    const baseURL = "https://boolean-api-server.fly.dev/klaand01/contact"
    
    return (
        <>
        <li style={{background: user.favouriteColour}}>
            <img
            src={user.profileImage}
            alt={user.firstName + " " + user.lastName}
            />
            <h3>{user.firstName + " " + user.lastName} </h3>
            <p>Email: {user.email}</p>
        </li>
        </>
    )
}

UsersListItem.propTypes =
{
    user: PropTypes.object
}