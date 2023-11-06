import { useState, useEffect } from 'react';

function UsersSection() {
  const [usersSection, setUsersSection] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=10')
      .then((response) => response.json())
      .then((data) => {
        setUsersSection(data.results);
        console.log(data);
      });
  }, []);

  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <ul>
          {usersSection.map((user) => {
            const className = user.gender === 'male' ? 'bg-blue' : 'bg-pink';
            const fullName = `${user.name.title} ${user.name.first} ${user.name.last}`;
            const email = user.email ? `Email: ${user.email}` : '';

            return (
              <li key={user.login.uuid} className={className}>
                <img src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} />
                <h3>{fullName}</h3>
                {email && <p>{email}</p>}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default UsersSection;
