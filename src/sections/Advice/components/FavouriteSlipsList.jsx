import AdviceSlip from "./AdviceSlip";

export default function FavouriteSlips({favouriteSlips}) {

    return (
        <section class="favourtite-slips-list">
            <h3>Favourite Advice Slips</h3>
            <ul>
            {favouriteSlips.map((slip) => (
                <li key={slip.id}>{slip.advice}</li>
            ))}
            </ul>
        </section>
    );
}