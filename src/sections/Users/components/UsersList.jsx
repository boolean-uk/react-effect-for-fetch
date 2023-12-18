import { useEffect, useState } from "react";

import UsersListItem from "./UsersListItem";

const BASE_URL = "https://randomuser.me/api/";
const FIELDS = `results=12&gender=female`;

export default function UsersList() {
  const [peopleData, setPeopleData] = useState([]);
  const [peopleInfo, setPeopleInfo] = useState({});

  useEffect(() => {
    async function obtainPeopleData() {
      const response = await fetch(`${BASE_URL}?${FIELDS}`);
      const result = await response.json();
      setPeopleData(result.results);
      setPeopleInfo(result.info);
    }
    obtainPeopleData();
  }, []);

  return (
    <ul className="users-list">
      {peopleData.map((person, index) => (
        <UsersListItem person={person} key={`person-${index}`} />
      ))}
    </ul>
  );
}