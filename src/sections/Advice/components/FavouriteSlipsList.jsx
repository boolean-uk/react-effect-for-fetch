import PropTypes from "prop-types";

export default function FavouriteSlipList({advice})
{
    return (
        <>
        <ul>
        <h3>Favourite Advice Slips</h3>
        {advice.map((ad, index) => (
        <li key={index}>{ad}</li>  
        ))}
        </ul>
        </>
    )
}

FavouriteSlipList.propTypes = {
  advice: PropTypes.array
};