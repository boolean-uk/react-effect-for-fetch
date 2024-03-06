import React from "react";
import UsersListItem from "./UsersListItem";

function UsersList({ usersList }) {
  // Check if usersList is empty or null
  if (!usersList || usersList.length === 0) {
    return <p>No users found.</p>;
  }

  return (
    <ul className="users-list">
      {usersList.map((user, index) => (
        <UsersListItem key={index} user={user} />
      ))}
    </ul>
  );
}

export default UsersList;
