import React from "react";

const User = ({ userperson }) => (
  <li className={userperson.gender}>
    <img
      src={userperson.picture.large}
      alt={`${userperson.name.title} ${userperson.name.first} ${userperson.name.last}`}
    />
    <h3>{`${userperson.name.title} ${userperson.name.first} ${userperson.name.last}`}</h3>
    <p>Email: {userperson.email}</p>
  </li>
);

export default User;
