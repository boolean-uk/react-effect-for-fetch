import React from "react";
import UsersListItem from "./UsersListItem";
const UsersList = ({ users }) => {
  console.log(users);
  return (
    <ul className='users-list'>
      {users.map((user, id) => (
        <UsersListItem user={user} key={id} />
      ))}
    </ul>
  );
};

export default UsersList;
