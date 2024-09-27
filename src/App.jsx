import AdviceSection from './sections/Advice'
import ArtsSection from './sections/Art'
import UsersSection from './sections/Users'
import './App.css'
import { useEffect, useState } from 'react'


function App() {
  const [userSection, setUserSection] = useState([])
  const [artSection, setArtSection] = useState([])
  useEffect(() => {
    fetch('https://randomuser.me/api/?results=10') 
      .then((response)=> response.json())
      .then((data) =>  {
        setUserSection(data.results)
        console.log(data.results)

      })
}, [])

useEffect(() => {
  fetch('https://api.artic.edu/api/v1/artworks?limit=100') 
   .then((response)=> response.json())
   .then((data) => {
    setArtSection(data.data)
    console.log(data.data)
  })
}, [])

  return (
    <div className="main-layout">
      <ArtsSection  artSection={artSection}/>
      <UsersSection  userSection={userSection}/>
      <AdviceSection />
    </div>
  )
}

export default App
