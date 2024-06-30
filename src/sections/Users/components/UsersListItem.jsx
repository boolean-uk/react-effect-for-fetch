import React from "react";

const UsersListItem = ({ user }) => {
  const profileImageUrl = `https://www.gravatar.com/avatar/${user.email}?s=120&d=identicon`;
  console.log(
    `Profile Image URL for ${user.firstName} ${user.lastName}: ${profileImageUrl}`
  );

  return (
    <li style={{ background: user.favoriteColor }}>
      <img
        src={profileImageUrl}
        alt={`${user.firstName} ${user.lastName}`}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "https://via.placeholder.com/150";
        }}
      />
      <h3>
        {user.title} {user.firstName} {user.lastName}
      </h3>
      <p>Email: {user.email}</p>
    </li>
  );
};

export default UsersListItem;
