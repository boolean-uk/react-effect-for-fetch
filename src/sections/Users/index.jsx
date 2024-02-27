import { useState, useEffect } from "react";

function UsersSection({ users, USER_ENDPOINT }) {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch(USER_ENDPOINT)
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
      });
  }, [USER_ENDPOINT]);

  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <ul className="users-list">
          {userData.map((user, index) => (
            <li key={index} style={{ background: user.favouriteColour }}>
              <img
                src={`https://www.gravatar.com/avatar/${user.email}?s=120&d=identicon`}
                alt={user.firstName + user.lastName}
              />
              <h3>{user.firstName + " " + user.lastName}</h3>
              <p>Email: {user.email}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default UsersSection;
