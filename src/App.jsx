import AdviceSection from './sections/Advice'
import ArtsSection from './sections/Art'
import UsersSection from './sections/Users'
import './App.css'
import { useEffect, useState } from 'react'
import ArtList from './sections/Art/components/ArtList'

function App() {

  const [artItems, setArtItems] = useState([])

  const searchArt = () => {
    const baseURL = "https://api.artic.edu/api/v1"
    const endpoint = "/artworks/search?q=cats&query[term][is_public_domain]=true&fields=id,artist_title,title,image_id,subject_titles,thumbnail"
    fetch(baseURL+endpoint)
      .then(response => response.json())
      .then(data => setArtItems(data.data))
      // .then(() => console.log("loaded art items", artItems))
  }

  useEffect(searchArt, [])

  const [users, setUsers] = useState([])

  const getUsers = () => {
    const baseURL = "https://randomuser.me/api/"
    const endpoint = "?results=10&inc=gender,name,email,picture"
    fetch(baseURL + endpoint)
      .then(response => response.json())
      .then(data => setUsers(data.results))
      .then(() => console.log("fetched and saved users", users))
  }

  useEffect(getUsers, [])
  
  const [advice, setAdvice] = useState([])

  return (
    <div className="main-layout">
      <>
        <ArtsSection artArr={artItems}/>
        <UsersSection userArr={users} />
        <AdviceSection />
      </>
    </div>
  )
}

export default App
