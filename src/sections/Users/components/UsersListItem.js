import React from 'react'

function UsersListItem({ user }) {
  const { picture, name, email, gender } = user;

  const backgroundColorClass = gender === "male" ? "bg-blue" : "bg-pink";

  return (
    <li className={`user-item ${backgroundColorClass}`}>
      <div className="frame">
        <img src={picture.medium} alt={`${name.first} ${name.last}`} />
      </div>
      <h3>{`Mr/Ms ${name.first} ${name.last}`}</h3>
      <p>Email: {email}</p>
    </li>
  );
}

export default UsersListItem;