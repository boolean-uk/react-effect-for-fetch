import React, { useState, useEffect } from "react";
import User from "./UsersListItem.jsx";

const UserList = () => {
  const [theusers, setTheUsers] = useState([]);

  const getTheUsers = () => {
    fetch("https://randomuser.me/api/?results=10")
      .then((response) => response.json())
      .then((data) => setTheUsers(data.results));
  };

  useEffect(getTheUsers, []);

  return theusers.map((userperson) => (
    <User
      userperson={userperson}
      key={`${userperson.name.title}${userperson.name.first}${userperson.name.last}`}
      theusers={theusers}
      setTheUsers={setTheUsers}
    />
  ));
};

export default UserList;
