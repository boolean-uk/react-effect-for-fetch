import { useState } from "react";
import { useEffect } from "react";
import UsersList from "./components/UsersList";

function UsersSection() {
  const[userData, setUserData] = useState(null);

  //API calling:
  const url = `https://boolean-api-server.fly.dev/KantheeK/contact`
  useEffect(() => {
    
    fetch(url)
    .then(res => res.json())
    .then(userData => setUserData(userData))
  }, [url]);

  return (
    <section>
      <h2>Users Section</h2>
     
      {userData && <UsersList data={userData} />}
    </section>
  )
}

export default UsersSection
