function FavouriteSlipsList(props) {
    return (
        <section className="favourtite-slips-list">
            <ul>
                {
                    props.adviceData.map((advice,index) => {
                        return <li key={index}>{advice}</li>
                    })
                }
            </ul>
        </section>
    )
}

export default FavouriteSlipsList