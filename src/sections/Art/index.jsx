import { useState, useEffect } from "react";
import ArtList from "./components/ArtList";

const BASE_URL = "https://boolean-api-server.fly.dev/";
const ITEMS_PATH = "art";

function ArtsSection() {
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
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ArtList itemList={items} baseURL={BASE_URL} />
      </div>
    </section>
  );
}

export default ArtsSection;
