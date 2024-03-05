import UserListItem from "./UsersListItem";
import React from 'react';
import PropTypes from 'prop-types'

export default function UserList(props) {
    return (
        <ul className="users-list">
            {props.data.map((user, i) => (
                <UserListItem key={i} user={user} />
            ))}
        </ul>
    )
}

UserList.propTypes = {
    data: PropTypes.array.isRequired
}