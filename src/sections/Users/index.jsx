import React, { useEffect, useState } from "react";

function UsersSection() {
  const [userData, setuserData] = useState([]);
  const baseURL =
    "https://boolean-uk-api-server.fly.dev/reduan-azouaghe/contact";

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(baseURL);
      const jsonData = await response.json();
      setuserData(jsonData);
    };
    fetchData();
  }, []);

  return (
    <section>
      <h2>Users Section</h2>

      <div className="scroll-container">
        <ul className="users-list">
          {userData.map((object, index) => (
            <React.Fragment key={index}>
              <li style={{ backgroundColor: object.favouriteColour }}>
                <img
                  src={object.profileImage}
                  alt={`${object.firstName} ${object.lastName}`}
                />

                <h3>{`${object.firstName} ${object.lastName}`}</h3>

                <p>{object.email}</p>
              </li>
            </React.Fragment>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default UsersSection;
