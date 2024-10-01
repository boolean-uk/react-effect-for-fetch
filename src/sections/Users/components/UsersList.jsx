// https://boolean-uk-api-server.fly.dev/dagandreas/contact

import { useEffect, useState } from "react";
import UsersListItem from "./UsersListItem";

function UsersList() {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    fetch("https://boolean-uk-api-server.fly.dev/dagandreas/contact")
      .then((res) => res.json())
      .then(setUserList);

    console.log(userList);
  }, []); // note to self: very important with dependency arrays!!!

  return (
    <div>
      <h1>Users Section</h1>
      <ul>
        {userList.map((user) => (
          <UsersListItem key={user.id} userItem={user} />
        ))}
      </ul>
    </div>
  );
}

export default UsersList;
