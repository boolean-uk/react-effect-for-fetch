import AdviceSection from './sections/Advice'
import ArtsSection from './sections/Art'
import UsersSection from './sections/Users'
import './App.css'
import { useEffect, useState } from 'react'
import ArtList from './sections/Art/components/ArtList'

function App() {
  const init_artItems = [
    {
        "_score": 95.65075,
        "thumbnail": {
            "alt_text": "A work made of lithograph in 6 colors (red, ochre, yellow, black, gray-brown, brown) from two stones, with scraping on stone, on ivory wove paper.",
            "width": 2928,
            "lqip": "data:image/gif;base64,R0lGODlhBgAFAPQAAEI9JFFFLV5QPWVaOn1VR31rUHhpV3BnXHprWYBhRpJgUIdyU6VqW6pxXKR5WId9b458bcBvZcdwaM14btR3b9V8c9F/eI6Dc6uHeqKSfcORhtiVjdmWjt6ZkAAAAAAAACH5BAAAAAAALAAAAAAGAAUAAAUY4GUgxZI9QgAk2jE4CrNBhFVRHdZMkcSFADs=",
            "height": 2250
        },
        "api_model": "artworks",
        "is_boosted": false,
        "api_link": "https://api.artic.edu/api/v1/artworks/51719",
        "id": 51719,
        "title": "Winter: Cat on a Cushion",
        "timestamp": "2023-03-01T03:06:07-06:00"
    },
    {
        "_score": 94.81111,
        "thumbnail": {
            "alt_text": "A work made of hand-colored woodblock print; tan-e, vertical o-oban.",
            "width": 2039,
            "lqip": "data:image/gif;base64,R0lGODlhAwAFAPMAAK+RdLmlgryjhrCgiL2oj8KymsWzmMq2msvArMvBrNDBrNDGsdjLtNnOtwAAAAAAACH5BAAAAAAALAAAAAADAAUAAAQLMLFmRCvhDECWQhEAOw==",
            "height": 3800
        },
        "api_model": "artworks",
        "is_boosted": false,
        "api_link": "https://api.artic.edu/api/v1/artworks/158921",
        "id": 158921,
        "title": "Courtesan Playing with a Cat",
        "timestamp": "2023-03-01T03:05:33-06:00"
    },
    {
        "_score": 94.1666,
        "thumbnail": {
            "alt_text": "A work made of gold, enamel, and baroque pearl.",
            "width": 2911,
            "lqip": "data:image/gif;base64,R0lGODlhBgAFAPQAAKGJbLOYdbKafMGhdJ6fn6eWgLSgiLCnnKKhoaWjpKakpaelpqenp66wtbKwsbSztLW0tLi3uLe5v7y9vsasjsO6ssK9vMPAvsfBvMXBwMTCwsLCxcjIyO3m3wAAAAAAACH5BAAAAAAALAAAAAAGAAUAAAUYILMoCUJAjxMczXR1QyFtBiUAEYdVVqaFADs=",
            "height": 2250
        },
        "api_model": "artworks",
        "is_boosted": false,
        "api_link": "https://api.artic.edu/api/v1/artworks/119335",
        "id": 119335,
        "title": "Baroque Pearl Mounted as a Cat Holding a Mouse",
        "timestamp": "2023-07-05T13:11:15-05:00"
    },
    {
        "_score": 93.70372,
        "thumbnail": {
            "alt_text": "A work made of lithograph in black on ivory wove paper, laid down on ivory cloth.",
            "width": 1767,
            "lqip": "data:image/gif;base64,R0lGODlhBAAFAPQAAC0nHFpSRH92Z4V+boyDdJOId6KWh6GYiaacjKidja6lkq6klLKolrmunb6zosO4psK6qMe6qNHEstPItwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAEAAUAAAURYIQs0zMojQBARxEwhOQkRggAOw==",
            "height": 2250
        },
        "api_model": "artworks",
        "is_boosted": false,
        "api_link": "https://api.artic.edu/api/v1/artworks/68825",
        "id": 68825,
        "title": "The Cats' Rendezvous",
        "timestamp": "2023-11-01T23:26:47-05:00"
    },
    {
        "_score": 91.39859,
        "thumbnail": {
            "alt_text": "A work made of engraving on ivory paper.",
            "width": 3000,
            "lqip": "data:image/gif;base64,R0lGODlhBgAFAPQAADs2K0I9MkM/NFJNPFhSQV1XRGFaSGJcTGVfT2dhTWhhTW5nU25nVm9oV29pWXFqVXFrWXZuWHdwW3hwXoN6X4Z9YoR7ZIR7ZYZ9ZZCHcK6kibWrj8e8n8m/oQAAAAAAACH5BAAAAAAALAAAAAAGAAUAAAUYILRUlIIwwVAYxwREhHU1wpNgksZ1W+aEADs=",
            "height": 2305
        },
        "api_model": "artworks",
        "is_boosted": false,
        "api_link": "https://api.artic.edu/api/v1/artworks/9372",
        "id": 9372,
        "title": "The Large Cat",
        "timestamp": "2023-03-01T03:18:38-06:00"
    },
    {
        "_score": 90.98534,
        "thumbnail": {
            "alt_text": "A work made of lithograph (brush, crayon and spatter with scraper) in pink/mauve, violet black and brown on cream wove paper.",
            "width": 3000,
            "lqip": "data:image/gif;base64,R0lGODlhBgAFAPQAAGFKRWlPSGdXUWxaU6VuXIlvY5RvYIZwZpt2Z5V3ap9/b6h4ZpqEd6SAb7CAbLaEb6WFdMuVfL2ZhsCXg8eZgN25oNrCreXBqOnFqufLs+fOtu7Sue3dx+/jzwAAAAAAACH5BAAAAAAALAAAAAAGAAUAAAUYIGdtGXZ1xyAUlZYECMBMxBMZirQ4VAOFADs=",
            "height": 2416
        },
        "api_model": "artworks",
        "is_boosted": false,
        "api_link": "https://api.artic.edu/api/v1/artworks/51724",
        "id": 51724,
        "title": "Summer: Cat on a Balustrade",
        "timestamp": "2023-03-01T03:12:20-06:00"
    },
    {
        "_score": 90.94462,
        "thumbnail": {
            "alt_text": "A work made of wood and plaster.",
            "width": 1500,
            "lqip": "data:image/gif;base64,R0lGODlhAwAFAPMAAGlQQXhiVG9yfZF9b4eAgJaKh4KGkKOXk6SZlJKWoaehoaKiqKmorbK5x+Tn8AAAACH5BAAAAAAALAAAAAADAAUAAAQL0BDBRkKhFbDcUREAOw==",
            "height": 2250
        },
        "api_model": "artworks",
        "is_boosted": false,
        "api_link": "https://api.artic.edu/api/v1/artworks/5522",
        "id": 5522,
        "title": "Cat Coffin",
        "timestamp": "2023-11-02T00:17:48-05:00"
    },
    {
        "_score": 85.344185,
        "thumbnail": {
            "alt_text": "A work made of bronze.",
            "width": 2733,
            "lqip": "data:image/gif;base64,R0lGODlhBgAFAPQAAA4ODhUVFRYWFhwcHB0dHTQ0NDY2Njc3Nzs7Oz8/P0xMTE5OTmhoaHNzc3h4eIODg4yMjJmZmZqamqOjo6mpqbm5uby8vMbGxsjIyMnJycvLy87Ozs/PzwAAAAAAAAAAACH5BAAAAAAAIf8LSW1hZ2VNYWdpY2sOZ2FtbWE9MC40NTQ1NDUALAAAAAAGAAUAAAUY4BVJG4dNiKA4lmMMAcBUC1E0VPYkB6SFADs=",
            "height": 2250
        },
        "api_model": "artworks",
        "is_boosted": false,
        "api_link": "https://api.artic.edu/api/v1/artworks/70989",
        "id": 70989,
        "title": "Lion",
        "timestamp": "2023-03-01T03:05:14-06:00"
    },
    {
        "_score": 82.81552,
        "thumbnail": {
            "alt_text": "A work made of color woodblock print; chuban.",
            "width": 2231,
            "lqip": "data:image/gif;base64,R0lGODlhBAAFAPQAAGRZQXBkSX9wRox9Upp9VJKDWqGNUqGCWJiHZJ+Pa6SOaLKNYKSXbaaefKygeraqh7uuhr+yj7+1lce8nAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAEAAUAAAURoMM8EnFE06I0UJEgxhAAQggAOw==",
            "height": 3000
        },
        "api_model": "artworks",
        "is_boosted": false,
        "api_link": "https://api.artic.edu/api/v1/artworks/21177",
        "id": 21177,
        "title": "Cat Pawing at Goldfish",
        "timestamp": "2023-03-01T03:05:19-06:00"
    },
    {
        "_score": 81.88345,
        "thumbnail": {
            "alt_text": "A work made of watercolor on cream laid paper, laid down on cream japanese paper.",
            "width": 1321,
            "lqip": "data:image/gif;base64,R0lGODlhAwAFAPMAAJ+PbZ2NboiKfZeKdamOcaWTcqOTda6ad6OVfK+afr6hfbCggtSwhNGwitm3jAAAACH5BAAAAAAALAAAAAADAAUAAAQLcBFURjAiHaAacxEAOw==",
            "height": 2250
        },
        "api_model": "artworks",
        "is_boosted": false,
        "api_link": "https://api.artic.edu/api/v1/artworks/62735",
        "id": 62735,
        "title": "Still Life with Cat",
        "timestamp": "2023-11-01T23:28:38-05:00"
    }
]

  const [artItems, setArtItems] = useState(init_artItems)
  const getArt = () => {
    const baseURL = "https://api.artic.edu/api/v1"
    const endpoint = "/artworks/search?q=cats&query[term][is_public_domain]=true"
    fetch(baseURL+endpoint)
      .then(response => response.json())
      .then(data => setArtItems(data.data))
      .then(() => console.log("loaded art items", artItems))
  }

  // useEffect(getArt, [])

  const [users, setUsers] = useState(["John", "Jane"])
  const getUsers = () => {
    const baseURL = "https://randomuser.me/api/"
    const endpoint = "?results=3"
    fetch(baseURL + endpoint)
      .then(response => response.json())
      .then(data => setUsers(data.results))
      .then(data => console.log(data))
      .then(() => console.log("fetched and saved users", users))
  }

  useEffect(getUsers, [])
  
  const [advice, setAdvice] = useState([])
  console.log(artItems.length, artItems[0], artItems)

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
