import { useEffect, useState } from "react";
import UsersList from "./components/UsersList";

function UsersSection() {
  const [user, setUser] = useState([
    {
      firstName: "",
      lastName: "",
      street: "",
      city: "",
      gender: "",
      email: "",
      jobTitle: "",
      latitude: null,
      longitude: null,
      favouriteColour: "",
      profileImage: "",
    },
  ]);
  useEffect(() => {
    console.log("useEffect of users section");
    fetch(`https://boolean-api-server.fly.dev/VictorAdamson/contact`)
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        setUser(jsonData);
        console.log(jsonData);
      });
  }, []);
  return (
    <section>
      <UsersList user={user} />
    </section>
  );
}

export default UsersSection;
