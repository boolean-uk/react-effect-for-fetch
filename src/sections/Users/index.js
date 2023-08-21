import { useEffect, useState } from "react";
import UsersList from "./components/UsersList";

function UsersSection() {

  const [userData, setUserData] = useState([]);

  async function getData() {
      const response = await fetch('https://randomuser.me/api/?results=10');
      const jsonResponse = await response.json();
      setUserData(jsonResponse.results);
  }

  useEffect(() => {
      getData();
      console.log("useEffect ran with user data");
  }, []);

    return (
        <section>
            <h2>Users Section</h2>
            <div className="scroll-container">
                <UsersList data ={userData} />
            </div>
        </section>
    );
}

export default UsersSection;
