import { useState, useEffect } from "react";
import AdviceSection from "./sections/Advice";
import ArtsSection from "./sections/Art";
import UsersSection from "./sections/Users";
import "./App.css";

function App() {
  const [imageURLs, setImageURLs] = useState([]);
  const [users, setUsers] = useState([]);

  const ART_ENDPOINT = "https://boolean-api-server.fly.dev/art"; // Define ART_ENDPOINT here

  useEffect(() => {
    fetch(ART_ENDPOINT)
      .then((response) => response.json())
      .then((data) => {
        const imageURLs = data.map((item) => item.imageURL);
        setImageURLs(imageURLs);
      });
  }, []);

  const USER_ENDPOINT = "https://boolean-api-server.fly.dev/pialoana/contact"; // Define ART_ENDPOINT here

  useEffect(() => {
    fetch(USER_ENDPOINT)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  return (
    <div className="main-layout">
      <ArtsSection imageURLs={imageURLs} ART_ENDPOINT={ART_ENDPOINT} />
      <UsersSection users={users} USER_ENDPOINT={USER_ENDPOINT} />
      <AdviceSection />
    </div>
  );
}

export default App;
