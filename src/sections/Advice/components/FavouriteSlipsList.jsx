function FavouriteSlipsList(props) {
    const { favData } = props
  return (
    <ul>
        {favData.map((advice, index) => (
        <li key={index}>{advice}</li>
        ))}
    </ul>
  )
}

export default FavouriteSlipsList