import React, { useState, useEffect } from "react";
import UsersList from "./components/UsersList";

function UsersSection() {
  const urlAPI = "https://boolean-api-server.fly.dev/Pmylonas13/contact";

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(urlAPI);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <UsersList usersList={users} />
      </div>
    </section>
  );
}

export default UsersSection;
