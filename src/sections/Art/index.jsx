import { useState, useEffect } from "react";
import { baseUrl } from "../utils/misc";
import ArtList from "./components/ArtList";

function ArtsSection() {
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    fetch(new URL("art", baseUrl).href)
      .then((res) => {
        if (!res.ok) {
          throw Error(
            "Failed to fetch data, check if json server is live and on port 3000!"
          );
        }
        return res.json();
      })
      .then((data) => setItemList(data));
  }, []);

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ArtList itemList={itemList} />
      </div>
    </section>
  );
}

export default ArtsSection;
