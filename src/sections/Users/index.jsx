import { useState, useEffect } from "react"

const baseURL = "https://boolean-api-server.fly.dev/maha897/contact"

function UsersSection() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch(baseURL)
      .then((response) => response.json())
      .then(setData);
  }, []);

  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <ul className="users-list">
          {data.map((item, index) => (
            <li key={index} style={{ background: item.favouriteColour }}>
              <img
                src={item.profileImage}
                alt={`${item.firstName} ${item.lastName}`}
              />
              <h3>{`${item.firstName} ${item.lastName}`}</h3>
              <p>Email: {item.email}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default UsersSection
