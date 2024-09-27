import { useEffect, useState } from "react";
import UserList from "./components/UsersList";

const BASE_URL = "https://boolean-api-server.fly.dev/";
const ITEMS_PATH = "tollov/contact";

function UsersSection() {
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    try {
      const response = await fetch(BASE_URL + ITEMS_PATH);
      const itemData = await response.json();
      setItems(itemData);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <UserList itemList={items} />
      </div>
    </section>
  );
}

export default UsersSection;
