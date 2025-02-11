import AdviceSection from "./sections/Advice";
import ArtsSection from "./sections/Art";
import UsersSection from "./sections/Users";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [art, setArt] = useState([]);
  const [advice, setAdvice] = useState(null);
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch()
    }
    fetch(`https://api.adviceslip.com/advice`)
      .then((res) => res.json())
      .then((data) => setAdvice(data));
      fetchData();
  }, []);
  console.log(advice);

  useEffect(() => {
    fetch(`https://boolean-uk-api-server.fly.dev/hedbom98/contact`)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  console.log(users);

  useEffect(() => {
    fetch(`https://boolean-uk-api-server.fly.dev/art`)
      .then((res) => res.json())
      .then((data) => setArt(data));
  }, []);
  console.log(art);






  const handleNewAdviceOnClick = async () => {
    await fetch(`https://api.adviceslip.com/advice`)
    .then((res) => res.json())
    .then((data) => setAdvice(data))
  }
    
  const HandleSetFavouriteOnClick = event => {
    setFavourites([...favourites, {advice}])
  }
  console.log(favourites);






  return (
    <div className="main-layout">
      <ArtsSection art={art} />
      <UsersSection users={users} />
      {advice && <AdviceSection advice={advice} handleNewAdviceOnClick={handleNewAdviceOnClick} HandleSetFavouriteOnClick={HandleSetFavouriteOnClick} favourites={favourites}/>}
    </div>
  );
}

export default App;
