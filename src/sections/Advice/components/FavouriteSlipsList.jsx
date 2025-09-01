function FavouriteSlipsList(props) {
    const { favData } = props
  return (
    <div>
        <h3>Favourite Advice Slips</h3>
        <ul>
            {favData.map((advice, index) => (
            <li key={index}>{advice}</li>
            ))}
        </ul>
        
    </div>
  )
}

export default FavouriteSlipsList