import AdviceSection from "./sections/Advice";
import ArtsSection from "./sections/Art";
import UsersSection from "./sections/Users";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  let [artworks, setArtworks] = useState([]);
  let [users, setUsers] = useState([]);

  useEffect(() => {
    async function retrieveArtworks() {
      try {
        const response = await fetch(
          "https://boolean-uk-api-server.fly.dev/art"
        );
        const fetchedData = await response.json();
        setArtworks(fetchedData);
      } catch (error) {
        console.error(error);
      }
    }

    retrieveArtworks();
  }, []);

  useEffect(() => {
    async function retrieveUsers() {
      try {
        const response = await fetch(
          "https://boolean-uk-api-server.fly.dev/JDC-horizons/contact"
        );
        const fetchedData = await response.json();
        setUsers(fetchedData);
      } catch (error) {
        console.error(error);
      }
    }

    retrieveUsers();
  }, []);

  return (
    <div className="main-layout">
      <ArtsSection artworks={artworks} />
      <UsersSection users={users} />
      <AdviceSection />
    </div>
  );
}

export default App;
