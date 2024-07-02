import React from "react";
import UsersListItem from "./UsersListItem";

function UsersList({ users }) {
  return (
    <div className="scroll-container">
      <ul className="users-list">
        {users.map((user) => (
          <UsersListItem
            key={user.id}
            email={user.email}
            name={`${user.firstName} ${user.lastName}`}
            favoriteColor={user.favoriteColor}
          />
        ))}
      </ul>
    </div>
  );
}

export default UsersList;
