import { useState, useEffect } from "react"
import UsersList from "./components/UsersList";

function UsersSection() {

  const URL = 'https://boolean-uk-api-server.fly.dev/victorscodingcorner/contact';
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(URL);
      const jsonData = await response.json();
      setUserData(jsonData);
    };
    fetchData();
  }, []);

  return  (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
            <>
              <UsersList users={userData}/>  
            </>

      </div>
     
    </section>
  ) 
}

export default UsersSection
 