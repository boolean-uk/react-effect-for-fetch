import {useState, useEffect} from 'react'

function AdviceSection() {
  const url = "https://api.adviceslip.com/advice"
  const [advice, setAdvice] = useState(null)
  const [reload, setReload] = useState(false)
  const [favourites, setFavourites] = useState([])
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAdvice(data.slip))
      .catch((error) => console.error('Error fetching advice:', error));
  }
  , [])

  useEffect(()=>{setAdvice(null);
    fetch(`${url}?r=${reload}`)
    .then(res=>res.json())
    .then(data=>setAdvice(data.slip))
    .catch(e=>console.error('Error fetching advice:',e))
  }
    ,[reload])

  useEffect(()=>{
    console.log('Favourites updated:', favourites);
  },[favourites])

  useEffect(()=>{
    const storedFavourites = localStorage.getItem('favouriteSlips');
    if(storedFavourites){
      setFavourites(JSON.parse(storedFavourites));
    }
  },[])

  useEffect(()=>{
    localStorage.setItem('favouriteSlips', JSON.stringify(favourites));
  },[favourites])



  return (
    <section>
      <h2>Advice Section</h2>
      <section className="adivce-slip">
        <h3>Some advice</h3>
        {advice ? (
          <div>
            <p>{advice.advice}</p>
            </div>
        ) : (
          <p>Loading advice...</p>
        )}
        <button onClick={()=>setReload(r=>!r)}>Get more advice</button>
        <button onClick={()=>{
          if(advice && !favourites.find(fav=>fav.id===advice.id)){
            setFavourites(favs=>[...favs, advice]);
          }
        }}>Add to favourites</button>
      </section>
      <section className="favourtite-slips-list">
        <h3>Favourite slips</h3>
        {favourites.length>0 ? (
          <ul>
            {favourites.map(fav=>(
              <li key={fav.id}>{fav.advice}</li>
            ))}
          </ul>
        ) : (
          <p>No favourite advice yet.</p>
        )}
      </section>
    </section>
  )
}

export default AdviceSection
