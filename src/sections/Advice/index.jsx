import { useEffect, useState, useRef, useCallback } from "react"
import AdviceSlip from "./components/AdviceSlip";
import FavoriteSlips from "./components/FavouriteSlipsList";

function AdviceSection() {
const [serverUrl, setUrl] = useState('https://api.adviceslip.com/advice')
const [advice, setData] = useState(false)
const [favorites, setFavorites] = useState([])

let allowFetching = true;
let Advice = "Want some advice?";
let Loading = ''

if(advice){ Advice = advice.slip.advice}

useEffect(()=>{
FetchFunction(allowFetching)
allowFetching = false;
}, [serverUrl])

async function FetchFunction(bool){
  if(bool){
 await fetch('https://api.adviceslip.com/advice')
.then(res => res.json())
.then(data => setData(data));
}
}

function handleClick(e){
  e.preventDefault()
  setData({slip:{advice:'loading'}})
  FetchFunction(true)
  
}
function saveToList(){
  if(favorites.indexOf(Advice) < 0){
    setFavorites([...favorites, Advice])
  }
}

function handleDelete(event){
  let updateFav = favorites.filter(fav => fav!=event.target.innerHTML)
  setFavorites(updateFav)
}

  return (
    <section>
      <h2>Advice Section</h2>
<section className="advice-slip">
    {Loading}
    <AdviceSlip data={Advice} handleClick={e=>handleClick(e)} saveAdvice={()=>saveToList()}/>
</section>
      <section className="favourtite-slips-list">
      <h3>Favourite Advice Slips</h3>
      
      <p>Add unique quotes to favourites by button<br></br>Remove from favorites by clicking on the quote</p>
   <FavoriteSlips arr={favorites} handleClick={e=>handleDelete(e)}/>
   </section>
   
    </section>
  )
}

export default AdviceSection

