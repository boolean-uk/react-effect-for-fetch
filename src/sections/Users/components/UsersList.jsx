import { useState, useEffect } from "react";
import UsersListItem from "./UsersListItem";

export default function UsersList() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch("https://boolean-uk-api-server.fly.dev/Hamada-AB/contact")
      .then((response) => response.json())
      .then(setUserData);
  }, []);

  return (
    <ul className="users-list">
      {userData.map((item, index) => {
        return <UsersListItem key={index} item={item} />;
      })}
    </ul>
  );
}
