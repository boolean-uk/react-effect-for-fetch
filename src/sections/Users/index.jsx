import { useEffect, useState } from "react";
import UserList from "./components/UsersList";

function UsersSection() {
  const [userData, setUserData] = useState([
    {
      firstName: "",
      lastName: "",
      email: "",
      favouriteColour: "",
      profileImage: "",
      id: null,
    },
  ]);
  useEffect(() => {
    fetch(`https://boolean-api-server.fly.dev/MackanPalm/contact`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        setUserData(data);
      });
  }, []);

  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <UserList userData={userData} />
      </div>
    </section>
  );
}

export default UsersSection;
