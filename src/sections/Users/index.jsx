import { useState, useEffect } from 'react';

function UsersSection() {
  const [users, setUsers] = useState([]);

  const fetchUser = () => {
    fetch('https://randomuser.me/api/?results=20')
      .then((response) => response.json())
      .then((data) => setUsers(data.results)); 
  };

  useEffect(() => {
    fetchUser();
  }, []);

  console.log(users);


  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
      {users.map((user) => {
        return(
          <ul className="users-list"  key={user.login.uuid}>
            <li className="bg-blue">
              <img
                src={user.picture.medium}
                alt={`${user.name.first} ${user.name.last}`}
              />
              <h3>{`${user.name.first} ${user.name.last}`}</h3>
              <p>{user.email}</p>
            </li>
          </ul>
        )
      })}
      </div>
    </section>
  );
}

export default UsersSection;
