import { useState, useEffect } from "react";

function UserListItem() {
  //const { art } = props;

  const [users, setUser] = useState([]);

  useEffect(() => {
    
      fetch("https://boolean-api-server.fly.dev/sandersaether/contact")
        .then((res) => res.json())
        .then((data) => setUser(data));
    
  }, []);

  return (
    <>
    {users.map((user, index) => (
    <li key = {index} style={{background : user.favouriteColour}}>      
            <div className="frame">
                <img
                src={user.profileImage}
                alt={user.firstName + " " + user.lastName}
                />
            </div>
          <h3>{user.firstName + " " + user.lastName}</h3>
          <p>Email: {user.email}</p>
    
      
      
    </li>
    ))}
    </>
  );
}

export default UserListItem;