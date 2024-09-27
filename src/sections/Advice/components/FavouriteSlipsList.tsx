import React from "react";

interface FavouriteSlipsListProps {
    favouriteAdvices: string[]
}

const FavouriteSlipsList = ({ favouriteAdvices }: FavouriteSlipsListProps) => {

    return (
        <section className="favourtite-slips-list">
            <h3>Favourite Advice Slips</h3>
            <ul>
                {favouriteAdvices.map((advice, index) => (
                    <li key={advice + index}>{advice}</li>
                ))}
            </ul>
        </section>
    );
}

export default FavouriteSlipsList;