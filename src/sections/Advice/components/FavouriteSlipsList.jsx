export default function Favourites ({listOfFavourites}) {
  console.log(listOfFavourites)
  return (
    <ul>
      {listOfFavourites.map((item, index) => <li key={index}>{item.advice}</li>)}
    </ul>
  )
}