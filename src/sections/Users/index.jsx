import { useEffect, useState } from "react";
import { fetchData } from "../../helpers/FetchData";
import UserList from "./components/UsersList";

function UsersSection() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchArtworks = async () => {
      const data = await fetchData(
        "https://boolean-uk-api-server.fly.dev/simFred/contact"
      );
      setUsers(data);
    };

    fetchArtworks();
  }, []);

  console.log(users);
  return (
    <section>
      <h2>Users Section</h2>
      <UserList users={users} />
    </section>
  );
}

export default UsersSection;
