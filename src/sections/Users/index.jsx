import { useEffect, useState } from "react";

function UsersSection() {
  const [userData, setUserData] = useState([]);
  console.log("user data", userData);

  useEffect(() => {
    fetch("https://boolean-uk-api-server.fly.dev/zainabch123/contact")
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, []);

  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <ul className="users-list">
          {userData.map((userItem, index) => (
            <li
              key={index}
              style={{ background: `${userItem.favouriteColour}` }}
            >
              <img
                src={userItem.profileImage}
                alt={`${userItem.firstName} ${userItem.lastName}`}
              />
              <h3>
                {userItem.firstName} {userItem.lastName}
              </h3>
              <p>Email: {userItem.email}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default UsersSection;
