import React, { useEffect, useState } from 'react'
import UsersList from './components/UsersList'

function UsersSection() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiUrl = 'https://randomuser.me/api/?results=10';

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setUserData(data.results);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <section>
      <h2>Users Section</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <UsersList userData={userData} />
      )}
    </section>
  );
}

export default UsersSection;