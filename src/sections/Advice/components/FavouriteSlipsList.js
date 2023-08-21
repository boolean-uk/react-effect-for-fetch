export default function FavouriteSlipsList(props) {
  const { faveSlips } = props

  return (
    <>
      <h3>Favourite Advice Slips</h3>
      {
        (faveSlips.length > 0) &&
          <ul>
            {
              faveSlips.map((slip, index) => <li key={index}>{ slip.advice }</li>)
            }
          </ul>
      }
    </>
  )
}