import AdviceSection from './sections/Advice'
import ArtsSection from './sections/Art'
import UsersSection from './sections/Users'

import './App.css'
import { useState } from 'react'
import { useEffect } from 'react'

function App() {
  const [artdata, setArtData] = useState([]);
  const [userData, setUserData] = useState([]);

  const GET_ART = "https://boolean-api-server.fly.dev/art";
  const GET_USERS = "https://boolean-api-server.fly.dev/guro18/contact";

  useEffect(() => {
    console.log("fetching")
    fetch(GET_ART)
    .then((response) => response.json())
    .then((responseData) => {
      console.log("fetched data: ", responseData);
      setArtData(responseData);
    });
  }, []);

  useEffect(() => {
    console.log("fetching users")
    fetch(GET_USERS)
    .then((response) => response.json())
    .then((responseData) => {
      console.log("fetched data: ", responseData);
      setUserData(responseData);
    });
  }, []);

  console.log("currentData", userData[0]);

  return (
    <div className="main-layout">
      <ArtsSection data={artdata}/>
      <UsersSection data={userData}/>
      <AdviceSection />
    </div>
  )
}

export default App
