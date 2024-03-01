import { useState, useEffect } from "react"
import ArtListItem from "./ArtListItem";

export default function ArtList() {

  const [arts, setArts] = useState([]);


  useEffect(() => {
    fetch('https://boolean-api-server.fly.dev/art')
    .then(response => response.json())
    .then(data => { setArts(data) })
    .then(console.log(arts))
    .catch(error => {
      console.error('Error fetching arts:', error);
    })
  }, []);


  return (
    <>
    {arts.length === 0 ? (
        <p>No arts here...</p>
      ) : (
        <ul className="users-list">
          {arts.map((user, index) => (
            <ArtListItem 
            key={index}
            title={user.title}
            artist={user.artist}
            imageURL={user.imageURL}
            publicationHistory={user.publicationHistory}
            />
          ))}
        </ul>
      )}

    </>
  )
}
