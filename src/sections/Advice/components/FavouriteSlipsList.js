function FavourtiteSlipsList(props) {
    return (
        <div>
            <h3>Favourite Advice Slips</h3>
            <ul>
                {props.adviceList.map((item) => <li>{item}</li>)}
            </ul>
        </div>
    )
}
export default FavourtiteSlipsList