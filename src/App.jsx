import AdviceSection from "./sections/Advice";
import ArtsSection from "./sections/Art";
import UsersSection from "./sections/Users";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [artData, setArtData] = useState("");
  const [userData, setUserData] = useState("");
  const [adviceData, setAdviceData] = useState("");
  const [flag, setFlag] = useState(true);
  const [favorites, setToFavorites] = useState([]);

  useEffect(() => {
    fetch("https://boolean-api-server.fly.dev/art")
      .then((response) => response.json())
      .then((data) => {
        setArtData(data);
      });
  }, []);

  useEffect(() => {
    fetch("https://boolean-api-server.fly.dev/ssuihko/contact")
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
      });
  }, []);

  useEffect(() => {
    if (flag) {
      fetch("https://api.adviceslip.com/advice")
        .then((response) => response.json())
        .then((data) => {
          setAdviceData(data);
        });
      setFlag(false);
    }
  }, [flag]);

  const getNew = () => {
    setFlag(true);
  };

  const saveToFavorites = (data) => {
    setToFavorites((prev) => {
      return [...prev, data];
    });
  };

  return (
    <div className="main-layout">
      {artData !== "" ? <ArtsSection data={artData} /> : null}
      {userData !== "" ? <UsersSection data={userData} /> : null}
      {adviceData !== "" ? (
        <AdviceSection
          data={adviceData}
          filteredData={favorites}
          getNew={getNew}
          saveToFavorites={saveToFavorites}
        />
      ) : null}
    </div>
  );
}

export default App;
