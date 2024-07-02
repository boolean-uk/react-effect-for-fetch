import React from "react";
import md5 from "blueimp-md5";

function UsersListItem({ email, name, favoriteColor }) {
  const gravatarUrl = `https://www.gravatar.com/avatar/${md5(
    email
  )}?s=120&d=identicon`;

  return (
    <li style={{ backgroundColor: favoriteColor }}>
      <img src={gravatarUrl} alt={name} />
      <h3>{name}</h3>
      <p>Email: {email}</p>
    </li>
  );
}

export default UsersListItem;
