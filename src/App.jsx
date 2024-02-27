import { useEffect, useState } from "react";
import AdviceSection from "./sections/Advice";
import ArtsSection from "./sections/Art";
import UsersSection from "./sections/Users";
import "./App.css";

function App() {
  const [artData, setArtData] = useState(null);
  const [userData, setUserData] = useState(null);
  const [advice, setAdvice] = useState(null);

  console.log({ advice });

  useEffect(() => {
    console.log(
      "Running my effect once, note: dependency array contains []..."
    );

    fetch(`https://boolean-api-server.fly.dev/art`)
      .then((response) => response.json())
      .then((data) => {
        setArtData(data);
      });
    fetch(`https://boolean-api-server.fly.dev/JacobChenJensen/contact`)
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
      });
    fetch(`https://api.adviceslip.com/advice`)
      .then((response) => response.json())
      .then((data) => {
        setAdvice(data);
      });
  }, []);

  const fetchNewAdvice = () => {
    fetch(`https://api.adviceslip.com/advice`)
      .then((response) => response.json())
      .then((data) => {
        setAdvice(data);
      });
  };

  return (
    <div className="main-layout">
      <ArtsSection artData={artData} />
      <UsersSection userData={userData} />
      <AdviceSection advice={advice} fetchNewAdvice={fetchNewAdvice} />
    </div>
  );
}

export default App;
