import { useEffect, useState } from "react";
import AdviceSection from "./sections/Advice";
import ArtsSection from "./sections/Art";
import UsersSection from "./sections/Users";
import "./App.css";

function App() {
  const [artData, setArtData] = useState(null);
  const [userData, setUserData] = useState(null);

  console.log({ artData });
  console.log({ userData });

  useEffect(() => {
    console.log(
      "Running my effect once, note: dependency array contains []..."
    );

    fetch(`https://boolean-api-server.fly.dev/art`)
      .then((response) => response.json())
      .then((data) => {
        console.log("received data:", data);
        console.log("setting new state....");
        setArtData(data);
      });
    fetch(`https://boolean-api-server.fly.dev/JacobChenJensen/contact`)
      .then((response) => response.json())
      .then((data) => {
        console.log("received data:", data);
        console.log("setting new state....");
        setUserData(data);
      });
  }, []);

  return (
    <div className="main-layout">
      <ArtsSection artData={artData} />
      <UsersSection userData={userData} />
      <AdviceSection />
    </div>
  );
}

export default App;
