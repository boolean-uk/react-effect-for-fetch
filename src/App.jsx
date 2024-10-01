import AdviceSection from './sections/Advice'
import ArtsSection from './sections/Art'
import UsersSection from './sections/Users'
import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const[art, setArt]=useState([])
  const[userData, setUserData]=useState([])


  
  useEffect(() => {
    fetch('https://boolean-uk-api-server.fly.dev/thomamn/contact')
    .then(res => res.json())
    .then(userData => setUserData(userData))
  }, []
  )
  
  useEffect(() => {
    fetch('https://boolean-uk-api-server.fly.dev/art')
    .then(res => res.json())
    .then(art => setArt(art))
  }, []
  )


  return (
    <div className="main-layout">
      <ArtsSection artList={art}/>
      <UsersSection userData={userData}/>
      <AdviceSection />
    </div>
  )
}

export default App
