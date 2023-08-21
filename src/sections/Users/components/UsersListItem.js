import React from 'react';

function UsersListItem(props) {
    const fullName = props.user.name.first + ' ' + props.user.name.last;
    const email = props.user.email
    const gender = props.user.gender
    const title = gender === 'male' ? 'Mr' : 'Miss'
    const backgroundColor = gender === 'male' ? 'blue' : 'pink' 

    return (
    <li className={'bg-' + backgroundColor}>
        <img src={props.user.picture.medium} alt={fullName} />
        <h3>{title + ' ' + fullName}</h3>
        <p>Email: {email}</p>
    </li>
    )
}

export default UsersListItem;