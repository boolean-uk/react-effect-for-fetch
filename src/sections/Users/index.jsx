import { useEffect, useState } from "react";


function UsersSection() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://boolean-api-server.fly.dev/toege/contact/"
    )
      .then((response) => response.json())
      .then(setData);
  }, []);

  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <ul className="users-list">
          {data.map((item, index) => (
            <li 
              style={{background: item.favouriteColour}}
              key={index}>
              <img
                src={item.profileImage}
                alt={`${item.firstName} ${item.lastName}`} />
              <h3>{`${item.firstName} ${item.lastName}`}</h3>
              <p>Email: {item.email}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default UsersSection;
