import React from "react";

function UsersListItem({ user }) {
  return (
    <li style={{ background: "#0d7f26" }}>
      <img src={user.profileImage} alt={user.firstName + " " + user.lastName} />
        <h3>{user.firstName + " " + user.lastName}</h3>
        <p>Email: {user.email}</p>
    </li>
  );
}

export default UsersListItem;