import AdviceSection from "./sections/Advice";
import ArtsSection from "./sections/Art";
import UsersSection from "./sections/Users";
import "./App.css";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [art, setArt] = useState([]);
  const [users, setUsers] = useState([]);
  const [advice, setAdvice] = useState({});
  const [favs, setFavs] = useState([]);

  useEffect(() => {
    fetch("https://boolean-api-server.fly.dev/art")
      .then((response) => response.json())
      .then((item) => setArt(item));
    fetch("https://boolean-api-server.fly.dev/sebbsoon/contact")
      .then((response) => response.json())
      .then((item) => setUsers(item));
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((item) => setAdvice(item));
  }, []);

  function newAdvice() {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((item) => setAdvice(item));
  }

  function saveFav(advice) {
    if (favs.filter((a) => a === advice).length) {
      return;
    } else {
      setFavs([...favs, advice]);
    }
  }
  return (
    <div className="main-layout">
      <ArtsSection art={art} />
      <UsersSection users={users} />
      <AdviceSection
        advice={advice}
        newAdvice={newAdvice}
        favs={favs}
        onSaveFav={saveFav}
      />
    </div>
  );
}

export default App;
