import React from "react";

function UsersListItem({ user }) {
  const { firstName, lastName, email, profileImage, favouriteColour } = user;

  return (
    <li className="user-item" style={{ backgroundColor: favouriteColour }}>
      <div className="user-info">
        <img src={profileImage} alt={`${firstName} ${lastName}`} />
        <div>
          <h3>{`${firstName} ${lastName}`}</h3>
          <p>Email: {email}</p>
        </div>
      </div>
    </li>
  );
}

export default UsersListItem;
