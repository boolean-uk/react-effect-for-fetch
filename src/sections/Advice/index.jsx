import AdviceSlip from '../Advice/components/AdviceSlip'
import FavouriteSlipsList from './components/FavouriteSlipsList'

function AdviceSection({randomAdvice, addToFavorite, favoriteAdvices, generateRandomAdvice}) {

  return (
    <section>
      <AdviceSlip randomAdvice={randomAdvice} addToFavorite={addToFavorite} generateRandomAdvice={generateRandomAdvice} />
      <FavouriteSlipsList favoriteAdvices={favoriteAdvices} /> 
    </section>
  )
}

export default AdviceSection
