//import React from 'react'
import PropTypes from 'prop-types'


function UsersListItem ( { user } ) {

    const style = {
        background: user.favouriteColour,
    }

    const name = user.firstName + " " + user.lastName


    return (
        <li style={style}>
            <div>
                <img 
                    src={user.profileImage} 
                    alt={name} 
                />
                <h3>{name}</h3>
                <p>Email: {user.email}</p>
            </div>
        </li>
    )
}

export default UsersListItem

UsersListItem.propTypes = {
    user: PropTypes.object.isRequired
}