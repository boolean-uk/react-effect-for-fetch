import PropTypes from 'prop-types'

export default function PublicationHistory({history})
{
    return (
        <>
        <ul>
        {history.map((row, index) => (
            <li key={index}>{history[index]}</li>
            ))}
        </ul>
        </>
    )
}

PublicationHistory.propTypes =
{
  history: PropTypes.array
}