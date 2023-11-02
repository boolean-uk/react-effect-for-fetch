import { useEffect, useState } from "react";


function UsersSection(props) {

  const { userInfo } = props;
  
  const [user, setUser] =useState([])

  const fetchUser = () => {

    fetch('https://randomuser.me/api/')
    .then(Response => Response.json())
    .then(data => setUser(data))
  }
  useEffect(fetchUser, [])
  

  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <ul className="users-list">
          <li>
            <img src="" />
            <h3></h3>
            <p></p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default UsersSection;
