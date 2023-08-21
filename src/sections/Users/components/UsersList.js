import React from "react";
import UsersListItem from "./UsersListItem";

function UsersList(props) {
    return (
    <div class="scroll-container">
    <ul class="users-list">
    {props.data.map((user, index) => (
        <UsersListItem key={index} user={user}/>
            ))}
            </ul>
        </div>
    )
}

export default UsersList;
