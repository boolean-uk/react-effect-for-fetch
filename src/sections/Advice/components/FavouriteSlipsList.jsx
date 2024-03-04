
function FavouriteSlipsList(props) {
  console.log(props.favouriteAdvice)

  const content = props.favouriteAdvice.map(advice => {
    <li>
      {advice}
    </li>
  })

  return (
    <>
      <h3>Favourite Advice Slips</h3>
      <ul>
        {content}
      </ul>
    </>
  )
}

export default FavouriteSlipsList