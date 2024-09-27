import PropTypes from 'prop-types';

function ItemsList({ list }) {
    return (
        <ul>
            {list.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
    );
}

function FavouriteSlipsList(props) {

    const { fav } = props

    return (
        <section>
            <h3>Favourite Advice Slips</h3>
            <ItemsList list={fav} />
        </section>
    )
}

FavouriteSlipsList.propTypes = {
    fav: PropTypes.arrayOf(PropTypes.string)
}

export default FavouriteSlipsList