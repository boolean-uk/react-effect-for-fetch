import  { useEffect, useState } from "react";

function UsersSection() {
  const [users, setUsers] = useState([]); // Changed "user" to "users"

  const fetchUser = () => {
    fetch("https://randomuser.me/api/?results=30")
      .then((response) => response.json()) // Changed "Response" to "response"
      .then((data) => setUsers(data.results)); // Changed "setUser" to "setUsers"
  }

  useEffect(fetchUser, []);

  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <ul className="users-list">
          {users.map((user) => (
            <li
              key={user.login.username}
              className={user.gender === 'male' ? 'bg-blue' : 'bg-pink'}
            >
              <img src={user.picture.thumbnail} alt={user.name.first} />
              <h3>{user.name.first} {user.name.last}</h3>
              <p>{user.email}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default UsersSection;

