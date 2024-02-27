import { useEffect, useState } from "react";

import UsersList from "./components/UsersList";

function UsersSection() {
  const [userData, setUserData] = useState([]);

  const GitHubUsername = `llllllll-l`;
  const URL = `https://boolean-api-server.fly.dev/${GitHubUsername}/contact`;

  useEffect(() => {
    console.log("Running users useEffect");
    const fetchData = async () => {
      try {
        const req = await fetch(URL);
        const res = await req.json();
        setUserData(res);
      } catch (er) {
        console.log("OBS! Something went wrong, ", er);
      }
    };
    fetchData();
  }, [URL]);

  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <UsersList userData={userData} />
      </div>
    </section>
  );
}

export default UsersSection;

/*
<section>
  <h2>Users Section</h2>
  <div class="scroll-container">
    <ul class="users-list">
      <li style="background: #0d7f26;">
        <img
          src="https://www.gravatar.com/avatar/ritthy.ryan@example.com?s=120&d=identicon"
          alt="Ritthy Ryan"
        />
        <h3>Mr Ritthy Ryan</h3>
        <p>Email: ritthy.ryan@example.com</p>
      </li>
      <li style="background: #0d7f26;">
        <img
          src="https://www.gravatar.com/avatar/chloe.lopez@example.com?s=120&d=identicon"
          alt="Chloe Lopez"
        />
        <h3>Ms Chloe Lopez</h3>
        <p>Email: chloe.lopez@example.com</p>
      </li>
    </ul>
  </div>
</section>
 */
