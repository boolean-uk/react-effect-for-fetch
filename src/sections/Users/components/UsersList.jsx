//import { useState, useEffect } from "react"
//import React from 'react'
import UsersListItem from './UsersListItem'
import PropTypes from 'prop-types'

function UsersList(props) {
    return (
        <ul className="users-list">
            {props.data.map((user, index) => (
                <UsersListItem key={index} user={user} />
            ))}
        </ul>
    )
}

export default UsersList

UsersList.propTypes = {
    data: PropTypes.array.isRequired,
}