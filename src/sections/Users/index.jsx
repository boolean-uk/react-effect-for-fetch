import { useState, useEffect } from "react";

function UsersSection() {
  const [user, setUser] = useState([]);

  const fetchUser = () => {
    fetch("https://randomuser.me/api/?results=10")
      .then((response) => response.json())
      .then((data) => setUser(data.results));
  };
  useEffect(fetchUser, []);
  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <ul className="users-list">
          {user.map((person, index) => {
            return (
              <li key={index} className="bg-blue">
                <img src={person.picture.medium} alt={person.name} />
                <h3>{`${person.name.title} ${person.name.first} ${person.name.last}`}</h3>
                <p>{person.email}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default UsersSection;
