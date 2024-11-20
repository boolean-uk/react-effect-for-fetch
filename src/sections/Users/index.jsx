import { useState, useEffect } from "react";

function UsersSection() {
  const [users, setUsers] = useState()
  const address = 'https://boolean-api-server.fly.dev/MartinJohannessen/contact/'

  useEffect(() => {
    const fetchData = async () => {
      await fetch(address)
        .then(res => res.json())
        .then(data => setUsers(data))
    }
    fetchData()
  }, [])


  console.log(users)
  if (users)
  {

    return (
      <section>
        <h2>Users Section</h2>
        <div className="scroll-container">
          <ul className="users-list">
            {users.map((user, index) => {
              let prefix;
              switch (user.gender)
              {
                case 'Cis man':
                case 'Trans man':
                  prefix = 'Mr.';
                  break;
                case 'Cis woman':
                case 'Trans woman':
                  prefix = 'Ms';
                  break;
                case 'Cis female':
                case 'Transsexual person':
                  prefix = 'Mrs.';
                  break;
                case 'Woman':
                  prefix = 'Ms.';
                  break;
                default:
                  prefix = '';
              }
              return (
                <li
                  key={index}
                  style={{ backgroundColor: user.favouriteColour }}
                >
                  <img
                    src={user.profileImage}
                    alt={user.firstName + " " + user.lastName}
                  />
                  <h3>{prefix + ' ' + user.firstName + " " + user.lastName}</h3>
                  <p>Email: {user.email}</p>
                </li>
              )
            })}
          </ul>
        </div>
      </section>
    )
  }
}

export default UsersSection
