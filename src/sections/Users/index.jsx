/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'

function UsersSection() {

    const url = "https://boolean-uk-api-server.fly.dev/Vegard-S/contact";
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const jsonData = await response.json();
      setData(jsonData);
      setFilteredData(jsonData); 
    };
    fetchData();
  }, []);





  return (
    <section>
      <h2>Users Section</h2>
      
      <div className="scroll-container">
        <ul className="users-list">
          {data.map((user, index) => (
          <li key={index} style={{background: user.favouriteColour}}>
            <img
              src={user.profileImage}
              alt={user.firstName + " " + user.lastName}
            />
            <h3>{user.firstName + " " + user.lastName}</h3>
            <p>{user.email}</p>
          </li>
          ))}



        </ul>
      </div>
      
    </section>
  )
}

export default UsersSection
