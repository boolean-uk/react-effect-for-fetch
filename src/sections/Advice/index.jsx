import { useState } from "react"
import AdviceSlip from "./components/AdviceSlip"
import FavourtieSlipsList from "./components/FavouriteSlipsList"

function AdviceSection() {
    const [favourites, setFavourites] = useState([])

    return (
        <section>
            <h2>Advice Section</h2>
            <AdviceSlip setFavourites={setFavourites} favourites={favourites} />

            <FavourtieSlipsList favourites={favourites}/>
        </section>
    )
}

export default AdviceSection
