import React from "react";
import { User } from "../../interfaces/interface";

interface UserListItemProps {
    user: User
}
const UserListItem = ({ user }: UserListItemProps) => {

    return (
        
        <li style={{ background: `${user.favouriteColour}` }}>
            <img
                src={user.profileImage}
                alt={user.firstName + '' + user.lastName}
            />
            <h3>{`Mr ${user.firstName} ${user.lastName}`}</h3>
            <p>{`Email: ${user.email}`}</p>
        </li>
    );
}

export default UserListItem;