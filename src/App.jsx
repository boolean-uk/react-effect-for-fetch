import AdviceSection from './sections/Advice'
import ArtsSection from './sections/Art'
import UsersSection from './sections/Users'
import { useEffect, useState } from "react";
import './App.css'



function App() {

  const [artData, setArtData] = useState([]);
  const [usersData, setUsersData] = useState([]);
  const [adviceData, setAdviceData] = useState(null);
  const [favouritesData, setFavouritesData] = useState([])
  

const handleNewAdvice = async () => {
  await fetch(`	https://api.adviceslip.com/advice`)
  .then((res) => res.json())
  .then((data) => setAdviceData(data))
}

const handleSetFavAdvice = event => {
  setFavouritesData([...favouritesData, {adviceData}])
}
console.log(favouritesData);
  
    useEffect(() => {
      fetch(`https://boolean-uk-api-server.fly.dev/art`)
       .then(res => res.json())
       .then(data => setArtData(data))
   },[])

   console.log(artData)

   useEffect(() => {
     fetch(`https://boolean-uk-api-server.fly.dev/Winkler99/contact`)
       .then(res => res.json())
       .then(data => setUsersData(data))
   },[])
   console.log(usersData)
  
   useEffect(() => {
    fetch(`	https://api.adviceslip.com/advice`)
      .then(res => res.json())
      .then(data => setAdviceData(data))
  },[])
  console.log(adviceData)
  
  return (
    <div className="main-layout">
      <ArtsSection artData={artData} />
      <UsersSection usersData ={usersData}/>
      {adviceData && <AdviceSection adviceData ={adviceData} handleNewAdvice = {handleNewAdvice} handleSetFavAdvice = {handleSetFavAdvice} favouritesData = {favouritesData}/>}
    </div>
  )
}

export default App
