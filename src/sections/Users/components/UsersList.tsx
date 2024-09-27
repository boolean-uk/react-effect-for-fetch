import React from "react";
import { User } from "../../interfaces/interface";
import UserListItem from "./UsersListItem";

interface UserListProps {
    userList: User[]
}

const UserList = ({ userList }: UserListProps) => {

    return (
        <ul className="users-list">
            {userList.map((user) => (
                <UserListItem key={user.email} user={user} />
            ))}
        </ul>
    );
}

export default UserList;