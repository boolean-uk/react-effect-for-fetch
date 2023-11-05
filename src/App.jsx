import AdviceSection from './sections/Advice'
import ArtsSection from './sections/Art'
import UsersSection from './sections/Users'
import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const [usersSection, setUsersSection] = useState([])
  const [artSection, setArtSection] = useState([])



  // fucnrion to make a fetch request for the userSection
  useEffect(() => {
      fetch('https://randomuser.me/api/?results=10') 
        .then((response)=> response.json())
        .then((data) =>  {setUsersSection(data.results)
          console.log(data)
        
        })
  }, [])


// fucntion to make a fetch requet and get the data for hte art Worker, then set it to the artwork state we craeted at the top 
  useEffect(() => {
    fetch('https://api.artic.edu/api/v1/artworks?limit=10') 
     .then((response)=> response.json())
     .then((data) => {
      setArtSection(data.data)
      console.log(data.data)
    })
  }, [])



  // thingd to render on our page 
  return (
    <div className="main-layout">
      <ArtsSection artSection={artSection} />
      <UsersSection usersSection={usersSection} />
      <AdviceSection />
    </div>
  )
}

export default App
