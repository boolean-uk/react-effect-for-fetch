import React, { useState, useEffect } from 'react';
import UsersList from './components/UsersList';

function UsersSection() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    fetch('https://boolean-api-server.fly.dev/YOUR_GITHUB_USERNAME/contact') // Replace YOUR_GITHUB_USERNAME with your actual GitHub username
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));
  };

  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <UsersList users={users} />
      </div>
    </section>
  );
}

export default UsersSection;
