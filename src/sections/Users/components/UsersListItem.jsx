//import PropTypes for prop checking 
import PropTypes from 'prop-types'

//name functions and pass user
function UsersListItem ({user}) {
    //return user <li> containing background, DP, full name and email 
    return (
    <li style={{background: user.favouriteColour}}>
        <img src={user.profileImage} alt="Ritthy Ryan" />
        <h3>{user.firstName + " " + user.lastName}</h3>
        <p>Email: {user.email}</p>
    </li>
    )
}

//props declare and specify onject
UsersListItem.propType ={
    user: PropTypes.object
}

//export
export default UsersListItem 