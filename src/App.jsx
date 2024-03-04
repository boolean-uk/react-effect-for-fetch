import AdviceSection from "./sections/Advice";
import ArtsSection from "./sections/Art";
import UsersSection from "./sections/Users";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [artworks, setArtworks] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://boolean-api-server.fly.dev/art")
      .then((response) => response.json())
      .then((data) => {
        setArtworks(data);
      });
  }, []);

  useEffect(() => {
    fetch("https://boolean-api-server.fly.dev/najemhamo/contact")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        console.log(data);
      });
  }, []);

  return (
    <div className="main-layout">
      {artworks !== "" ? <ArtsSection data={artworks} /> : null}
      {users !== "" ? <UsersSection data={users} /> : null}
      <AdviceSection />
    </div>
  );
}

export default App;
