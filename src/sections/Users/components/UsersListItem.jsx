import { useEffect, useState } from "react";

function UsersListItem() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
    fetch("https://boolean-api-server.fly.dev/Enock97/contact")
      .then((response) => response.json())
      .then((data) => setUsers(data));
    }, []);

    return (
      <>
        {users.map((user, index) => (
          <li key={index} style={{ background: user.favouriteColour }}>
            <img
              src={user.profileImage}
              alt={user.firstName + " " + user.lastName}
            />
            <h3>{user.firstName + " " + user.lastName}</h3>
            <p>Email: {user.email}</p>
          </li>
        ))}
      </>
    );
}

export default UsersListItem