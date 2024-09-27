import AdviceSection from './sections/Advice'
import ArtsSection from './sections/Art'
import UsersSection from './sections/Users'
import './App.css'
import { useEffect } from 'react'
import { useState } from 'react'

function App() {
  
  const [artData, setArtData] = useState([])
  const [userData, setUserData] = useState([])
  const [randomAdvice, setRandomAdvice] = useState({})
  const [favoriteAdvices, setFavoriteAdvices] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();
      setRandomAdvice(data);
      setLoading(false)
    };
    fetchData();
  }, [loading]);

  useEffect(() => {
    fetch("https://boolean-api-server.fly.dev/Elsa-tech/contact")
    .then(res => res.json())
    .then(setUserData)
  },[])

  useEffect(() => {
    fetch("https://boolean-api-server.fly.dev/art")
    .then(res => res.json())
    .then(setArtData)
  },[])

  const addToFavorite = () => {
    setFavoriteAdvices([...favoriteAdvices, randomAdvice])
  }

  const generateRandomAdvice = () => {
    setLoading(true)
  }

  useEffect(() => {

  },[setFavoriteAdvices, favoriteAdvices])

  return (
    <div className="main-layout">
      {loading ? (<div>Loading ... </div>) : (
        <>
          <ArtsSection artData={artData} /> 
          <UsersSection userData={userData} />
          <AdviceSection randomAdvice={randomAdvice} addToFavorite={addToFavorite} favoriteAdvices={favoriteAdvices} generateRandomAdvice={generateRandomAdvice}/>
        </>
      )}
    </div>  
  )
}

export default App
