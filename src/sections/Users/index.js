import { useEffect, useState } from "react";

import UsersList from "./components/UsersList";

function UsersSection() {
  const [userData, setUserData] = useState({ results: [] });

  async function getUserData() {
    const response = await fetch("https://randomuser.me/api/?results=5");
    const json = await response.json();
    setUserData(json);
  }

  useEffect(() => {
    getUserData();
  }, []);

  return <UsersList userData={userData} />;
}

export default UsersSection;
