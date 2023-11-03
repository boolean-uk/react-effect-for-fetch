export default function Favourites ({listOfFavourites}) {
  return (
    <ul>
      {listOfFavourites.map((item, index) => <li key={index}>{item.advice}</li>)}
    </ul>
  )
}