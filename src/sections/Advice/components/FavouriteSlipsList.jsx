import React from "react";
import AdviceSlip from "./AdviceSlip";

function FavouriteSlipsList({ favouriteSlips }) {
    return(
        <>
            <h3>
                Favourite Advice Slips
            </h3>
            <ul>
                {favouriteSlips.map((slip,i) => (
                    <li key={slip+i}>
                        {slip}
                    </li>
                ))}
            </ul>
        </>
    )
}

export default FavouriteSlipsList