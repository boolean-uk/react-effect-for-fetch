import { useState, useEffect } from "react";

export default function UsersSection() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://boolean-api-server.fly.dev/noexperis-msg/contact"
        );
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <ul className="users-list">
          {users.map((user) => (
            <li key={user.id} style={{ background: user.favouriteColour }}>
              <img src={user.profileImage} alt="avatar" />
              <h3>{`${user.firstName} ${user.lastName}`}</h3>
              <p>Email: {user.email}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
