import { useEffect, useState } from "react"

function UsersSection() {
const [usersData, setUsersData] =  useState([]);

 useEffect(() => {
 getData();
}, []);

 async function getData() {
    const response = await fetch("https://randomuser.me/api/");
    const json = await response.json();
    setUsersData(json);
    console.log(json);
  }

  return (
    <section>
      <h2>Users Section</h2>
      {usersData.map((user) => (
        <div>
          <h4> fullName: {user.first} {user.last}</h4>
          <h4> email : {user.email}</h4>
          
        </div>
      ))}
    </section>
  );




}
export default UsersSection
